const string = "AAAABAABAAAABAAABAAAA";
const pattern = "AAAABAAA";

let _next = Array(...Array(pattern.length)).map(Number.prototype.valueOf, 0);

function get_next(pattern)
{
    let q = 1; // postfix pointer
    let k = 0; // prefix pointer
    
    for (; q < pattern.length; ++q)
    {
        
        while ((k > 0) && (pattern[q] !== pattern[k]))
        {
            
            k = _next[k - 1];
        }
        if (pattern[q] === pattern[k])
        {
            
            ++k;
        }
        
        _next[q] = k;
    }
    
}

function KMP(string, pattern)
{
    const match_positions = [];
    let match_start_position;

    let i = 0; // string pointer
    let k = 0; // pattern pointer
    get_next(pattern);
    for (; i < string.length; i++)
    {
        
        while ((k > 0) && (string[i] != pattern[k]))
        {
            
            k = _next[k - 1];
        }
        if (string[i] === pattern[k])
        {
            ++k;
            if (k === pattern.length)
            {
                match_start_position = i - pattern.length + 1;
                match_positions.push(match_start_position);
                
                k = _next[k - 1];
            }
            else
            {
                
            }
        }
        else
        {
            
        }
        
    }
    
}

KMP(string, pattern);
