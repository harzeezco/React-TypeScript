type PersonProps = {
   firstName: string,
   lastName?: string,
}


function Person(props: PersonProps) {
   return <div>
      <p>{props.firstName}</p>
  </div>;
}

export default Person;
