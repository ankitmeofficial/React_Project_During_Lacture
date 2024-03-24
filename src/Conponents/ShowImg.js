import "./ShowImg.css";
function ShowImg({ title, channel, view, time }) {
  return (
    <>
      {/* <div className='somelines'style={{backgroundColor:bgColor}}>heading for {title}</div> */}


      <div className="container">
        <img src="logo192.png" alt="react_ke_photo" />
        <div className="title">{title}</div>
        <div className="channel">{channel} </div>
        <div className="view">
          {view} view <span>.</span> {time}
        </div>
      </div>



    </>
  );
}
export default ShowImg;
