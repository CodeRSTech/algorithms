const ARank = {
  Flavio: ['Valentine', 'July', 'Summer', 'Violet'],
  Stephen: ['Summer', 'July', 'Valentine', 'Violet'],
  Albert: ['July', 'Violet', 'Valentine', 'Summer'],
  Jack: ['July', 'Violet', 'Valentine', 'Summer'],
};

const BRank = {
  July: ['Jack', 'Stephen', 'Albert', 'Flavio'],
  Valentine: ['Flavio', 'Jack', 'Stephen', 'Albert'],
  Violet: ['Jack', 'Stephen', 'Flavio', 'Albert'],
  Summer: ['Stephen', 'Flavio', 'Albert', 'Jack'],
};

function init(rank) {
  const o = {};
  for (const k in rank) {
    o[k] = {
      key: k,
      stable: false,
      rankKeys: rank[k],
    };
  }
  return o;
}

function extractUnstable(Q) {
  for (const k in Q) {
    if (Q[k].stable === false) {
      return Q[k];
    }
  }
}

const A = init(ARank);
const B = init(BRank);
let a;

while ((a = extractUnstable(A))) {
  
  logTracer.println(`Selecting ${a.key}`);
  Tracer.delay();

  const bKey = a.rankKeys.shift();
  const b = B[bKey];

  logTracer.println(`--> Choicing ${b.key}`);
  Tracer.delay();

  if (b.stable === false) {
    
    logTracer.println(`--> ${b.key} is not stable, stabilizing with ${a.key}`);
    Tracer.delay();

    a.stable = b;
    b.stable = a;

  } else {
    const rankAinB = b.rankKeys.indexOf(a.key);
    const rankPrevAinB = b.rankKeys.indexOf(b.stable.key);
    if (rankAinB < rankPrevAinB) {
      
      logTracer.println(`--> ${bKey} is more stable with ${a.key} rather than ${b.stable.key} - stabilizing again`);
      Tracer.delay();

      A[b.stable.key].stable = false;

      a.stable = b;
      b.stable = a;

    }
  }
}
