import  './DropDownMenu.style.css'

export default function DropDownMenu({list,visible}) {
    
    return (
        <div className="containerMenu" style= {{display:visible?'flex':'none'}}>
          <div className="myProfile">
          {list?.map((item, index) => {
                return (
                    <div key={item.title + index} className='itemContainer'>
                       <img src={item.icon}/>
                       <span>{item.title}</span>
                    </div>
                )
          })}
          </div>
        
        </div>
    )
}