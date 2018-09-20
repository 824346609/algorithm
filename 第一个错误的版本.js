
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let i = 1,
            j = n;
        while(i <= j) {
            let mid = parseInt((i + j) / 2);
            if(isBadVersion(mid) == true) {
                if(mid == 1 || isBadVersion(mid - 1) == false)
                    return mid;
                else if(isBadVersion(mid - 1) == true)
                    j = mid - 1;                   
            }
            else if(isBadVersion(mid) == false) {
                i = mid + 1;
            }
        } 
        return 0;
    };    
};     