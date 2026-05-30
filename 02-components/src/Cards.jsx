function Cards() {
 const name ='garry';
    return (
        <>
        <h2 className="test">other component called by {name}</h2>
        <p className="test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at pariatur dolore excepturi aut quas fugit ipsam necessitatibus blanditiis quis tenetur accusantium quia, ipsum voluptatum obcaecati officia nulla error veniam.</p>
        </>
    )
}

export default Cards
//external css
//even if i import ->(import './App.css')this file in the Bye.jsx ,we can able to use this css because Bye.jsx is imported in App.jsx through this css file also come along


//but due to this ,it can cause a problem if i want to use test class in bye file,and i want to use other test class in cards file ,then there is other method called css module
