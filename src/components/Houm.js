export default function Houm(){
    var w = window.innerWidth;
    if(w >= 617){
        return(
            <div className="mii" id="coo">
                <div className="mi" id="texte">
                    <h1 className="txt welcome">Welcome to my website!</h1>
                    <div className="txt who">
                    My name is Salwa Adlouni, I'm a second year Software Engineering student at ENSIAS.
                    </div>
                </div>
                <img className="mi cv" src="mi.png" alt="mi"></img>    
            </div>
        );
        
    }else {
        return(
            <div className="mii2" id="coo2">
                <img className="mi2 cv2" src="mi.png" alt="mi"></img>
                <div className="mi2" id="texte2">
                    <h1 className="txt2 welcome2">Welcome to my website!</h1>
                    <div className="txt2 who2">
                        My name is Salwa Adlouni, I'm a Software Engineering Student at ENSIAS and a developer.
                    </div>
                </div>
            </div>
        );//<img className="mi2 cv2" src="mi.png" alt="mi"></img>
    }
}
