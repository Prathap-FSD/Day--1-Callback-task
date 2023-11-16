let data = document.getElementById('count')
setTimeout(() => {
    data.innerText = '10'
    setTimeout(() => {
        data.innerText = '9'
       
        setTimeout(() => {
            data.innerText = '8'
         
            setTimeout(() => {
                data.innerText = '7'
                setTimeout(() => {
                    data.innerText = '6'
                    setTimeout(() => {
                        data.innerText = '5'
                        setTimeout(() => {
                            data.innerText = '4'
                            setTimeout(() => {
                                data.innerText = '3'
                                setTimeout(() => {
                                    data.innerText = '2'
                                    setTimeout(() => {
                                        data.innerText = '1'
                                        setTimeout(() => {
                                           
                                            data.innerText = 'Happy Independence Day'
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);