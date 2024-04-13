export default function SideBar(props){

    const {handleToggleModal} = props

    return(
        <div className="sidebar">
            <div className="bgOverlay" onClick={handleToggleModal}></div>
            <div className="sidebarContents">

                <h2>The Brutal Martian Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>asdjabsdhasdhbd asdhsabfhj njfbasdhjf jbdsfjh sfbsdf </p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    )
}