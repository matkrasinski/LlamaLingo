import LeftBar from "./LeftBar";


const Profile = () => {

    return (
        <div className="grid grid-cols-12 h-screen gap-4">
            <div className="col-span-3 p-4"><LeftBar /></div>
            
            <div className="col-span-9 p-4">Tak </div>
        </div>
    )
}

export default Profile;