const success = true;                  //Change this variable to see success or failure

const loginUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            //Set timeout is just written to simulate working of a server / api!
            if(success){
                resolve("User Logged in!");
            }
            else{
                reject(new Error("User cannot be logged in"))
            }
        }, 2000);
    });
};

const method1 = async () =>{
    try{
        const msg = await loginUser("Aditya", "12345");
        console.log(msg);
    }
    catch(err){
        console.log(err.message);
    }
}

const method2 = () => {
    loginUser("Aditya", "12345")
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err.message);
    });
}

method1();
method2();
