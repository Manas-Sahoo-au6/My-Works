class User {
  constructor (username, email,password){
    this.username = username,
    this.email= email,
    this.password= password
  }

  register (){
    console.log(this.username + '  is now  regsitered successfully ');

  }
}


class Member extends User {
  constructor (username,email,password
    ,memberPackage){
      super(username,email,password);
      this.package = memberPackage;
    }

    getPackage(){
      console.log(this.username +  '  is Subscribed to  the ' +this.package + ' package')
    }

}



let bob = new Member('manas ranjan', 'rmanas000@gmail.com','1234' , 'standard');
bob.register();
bob.getPackage();
