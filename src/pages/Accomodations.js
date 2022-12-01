import hotel from "../img/msnsp-exterior.webp";

export const Accommodations = (props) => {
    return (
        <main>
            <h1>Hotel Information</h1>
            <p>The reception will take place at the Hilton Garden Inn in Sun Prairie. If you wish to reserve a room in advance, please <a href="https://www.hilton.com/en/attend-my-event/msnspgi-shw-6a89bcdc-16cc-4384-890c-cc386e044046/">click here to get a room in our reserved block with a discounted rate.</a></p>
            <img className="w-100" src={hotel} alt="Hitlon Gardern Inn in Sun Prairie"/>
        </main>
    );
}