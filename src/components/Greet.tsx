type GreetProps = {
   name: string,
   job: string,
   status: string,
}


function Greet( {name}: GreetProps ) { 
   return <div>{name}</div>;
}

export default Greet;
