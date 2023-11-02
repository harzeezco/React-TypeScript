type CardObjectProp = {
   person: (string | number | null)[]
}

function CardObject(props: CardObjectProp) {
   return <div>
      <p>{props.person[0]}</p>
      <p>{props.person[1]}</p>
  </div>;
}

export default CardObject;
