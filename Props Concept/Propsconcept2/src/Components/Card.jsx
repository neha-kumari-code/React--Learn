import './Card.css'

function Card(props){
    return (
       <div className='div-container'>
        <h2>neha</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ex inventore voluptate suscipit eligendi deserunt ab porro labore
          accusamus dicta. Aliquid deserunt, commodi ea libero atque
           assumenda incidunt ex, at provident animi voluptatem eligendi,
            est reiciendis dignissimos perspiciatis aut porro? Impedit?</p>
            {props.children}
       </div>
    )
}

export default Card