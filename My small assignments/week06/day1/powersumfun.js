function sumpower(N,K) {
    if (K>0 && N>0){
         var sum =0;
        for (i=K ; i<=N ; i++){
           sum = sum +  (i**2);
           console.log(sum);
        }
    }
     
        if (N>0 && K<0){
            var sum =0;
            for (i=N; i>=0; i--){
                sum = sum + (i**2) ;
                console.log(sum);
            }
        }

     if (N<0){
        console.log('you are idiot ! LOL');
    }
    
}
sumpower(5,-17);


