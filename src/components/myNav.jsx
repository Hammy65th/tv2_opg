
import "./myNav.css"

const MyNav = () => {
  
  
    return (
    
   <header className="w-auto bg-white h-28">
    <nav className="flex items-center pl-28 h-28">
        <a href="https://tv2.dk">
       
        <svg aria-label="TV 2 logo" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#F0281E"></circle>
        <path d="M10.464 11.064l-1.498 2.65c-.43.76-.614 1.096-1.068 1.096-.319 0-.638-.163-.638-.753 0-.593.012-2.993.012-2.993H5.424v3.137c0 1.848 1.356 2.455 2.462 2.455 1.006 0 1.664-.458 2.37-1.685.304-.525 2.248-3.907 2.248-3.907h-2.04zM11.664 16.608h7.272V14.76h-6.223l-1.049 1.848z" fill="#fff"></path>
        <path d="M17.088 7.368H4.128v1.848h12.96c.511 0 .936.4.936.912a.943.943 0 0 1-.936.936H14.76l-1.073 1.848h3.401a2.79 2.79 0 0 0 2.784-2.784c0-1.534-1.25-2.76-2.784-2.76z" fill="#fff"></path>
        </svg></a>
       
        <ul className="flex text-2xl pl-7 gap-4 pr-px" id="ul_menu">
            <li><a className="no-underline hover:underline" href="https://nyheder.tv2.dk/">Nyheder</a></li>
            <li><a className="no-underline hover:underline" href="https://sport.tv2.dk/">Sport</a></li>
            <li><a className="no-underline hover:underline" href="https://vejr.tv2.dk/">Vejr</a></li>
            <li><a className="no-underline hover:underline" href="https://tv.tv2.dk/">TV</a></li>
        </ul>

        <div className="flex flex-row gap-2 rounded-lg ml-auto" id="button-dark">
            <a title="TV 2 Play" className="flex relative items-center text-lg font-medium box-border h-10 whitespace-nowrap text-center max-w-full cursor-pointer" href="https://mit.tv2.dk"><span className="ml-4 mr-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="#000523" xmlns="http://www.w3.org/2000/svg"><path d="M7.004 3.768L8.77 2l10 10-10 10-1.767-1.767L15.236 12 7.004 3.768z"></path></svg></span>Tv 2 Play</a>
            
            <a title="Log ind eller opret Mit TV 2 login" href="https://mit.tv2.dk"></a>
        </div>
    </nav>
   </header>

  )
}

export default MyNav