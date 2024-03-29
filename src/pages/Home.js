import Card from '../Card'
import Create from '../Create'

function Home(){
    return(
        <>
            <div className="button-layout">
                <p>Cards Against Humanity</p>
                <Card text="Create Room" id="create-room" />
                <Card text="Join Room" id="join-room" />
            </div>
            <Create />

        </>

    );
}

export default Home;