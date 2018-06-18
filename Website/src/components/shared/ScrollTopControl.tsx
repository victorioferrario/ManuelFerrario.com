
import * as React from 'react';

import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Icon from "@material-ui/core/Icon";

import PageCheckerControl from "./PageChecker";

// import { animateScroll } from "react-scroll";


export interface IScrollTopControlProps{
    containerId: string;
    delayInMs:number;        
    scrollStepInPx:number;    
}
export interface IScrollTopControlState{    
    element?:HTMLElement|null;    
    elementIsAvailable?:boolean;
    elementIsFadedIn?: boolean;
    intervalId:number;
    incrementer:number;
    startValue:number;
}
export default class ScrollTopControl extends React.Component <IScrollTopControlProps,IScrollTopControlState> {
        constructor(props:IScrollTopControlProps, state:IScrollTopControlState){
            super(props); 
            const temp = document.getElementById(this.props.containerId) != null ? 
                document.getElementById(this.props.containerId): null   
            this.state = {                        
                element: temp,
                elementIsAvailable : temp!==null, 
                elementIsFadedIn: false,
                incrementer: .5544,
                intervalId : 0,    
                startValue: 0            
            };
            this.handleClick = this.handleClick.bind(this);
            this.handleScroll = this.handleScroll.bind(this);
            this.animate = this.animate.bind(this);
            this.easeOutCubic = this.easeOutCubic.bind(this);
        }        
        public componentDidMount() {
              const temp = document.getElementById(this.props.containerId) != null ? 
                document.getElementById(this.props.containerId): null;
                this.setState ( {     
                    element:temp,
                     elementIsAvailable : temp!==null                   
                });  
            if (this.state.elementIsAvailable && this.state.element) {              
                this.state.element.addEventListener("scroll", this.handleScroll);
             }    
         }
         public componentWillUnmount() {
            if (this.state.elementIsAvailable && this.state.element) {              
                this.state.element.removeEventListener("scroll", this.handleScroll);
                window.addEventListener('scroll', this.handleScroll);
             }             
        }
        public handleScroll() {          
            if (this.state.elementIsAvailable && this.state.element) {      
                console.log(this.state.element.scrollTop);
                    if ( this.state.element.scrollTop > 100) {
                        this.setState({elementIsFadedIn: true });                       
                    }
                    if (this.state.element.scrollTop  < 99) {
                        this.setState({elementIsFadedIn: false });        
                    }
                    console.log( this.state.element.scrollTop);

                     console.log( this.state.element.scrollTop);
            }         
        }       
        public handleClick() {     
            if (this.state.elementIsAvailable && this.state.element) {              
                const id:number = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
                this.setState({ 
                    intervalId: id ,
                    startValue: this.state.element.scrollTop
                });
            }            
        }
        public render() {
            return (
            <aside className="floating-button">
                    <Fade in={this.state.elementIsFadedIn}>
                        <Button
                            variant="fab"
                            color="primary"
                            aria-label="^"
                            onClick={this.handleClick}>
                            <Icon style={{ fontSize: 22 }}>expand_less</Icon>
                        </Button>
                    </Fade>
                    <PageCheckerControl containerId="appContentId"/>   
            </aside>);
        }

    //    private defaultEasing(x:number) {
    //         if(x < 0.5) {
    //           return Math.pow(x*2, 2)/2;
    //         }
    //         return 1-Math.pow((1-x)*2, 2)/2;
    //     }
            

    //     private moveThing() {

    //             const incrementer = .0035;                                 
    //             const y = (1 / incrementer);                 
    //             const toY = y ;       
    //                     
    //             if (Math.abs(toY) >= 0) {
    //                 currentPos = -500;
    //                 incrementer = .01;
    //             }             
    //             
    //             requestAnimationFrame(moveThing);
    //  }


    public animate() {   

            if(this.state.elementIsAvailable && this.state.element){    
                this.setState({
                    incrementer: this.easeOutCubic( 
                        this.state.incrementer,
                        this.state.element.scrollTop,
                        this.state.element.scrollTop - this.state.incrementer, 100)  });      
                        
                        
                                                console.log(this.state.incrementer, this.state.startValue);
                                      
            
            }           
                 }    
   // animate();

   public easeOutCubic(currentIteration:number , startValue:number , changeInValue:number, totalIterations:number) {
            return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
    }
        private scrollStep() {            

            if(this.state.elementIsAvailable && this.state.element){                
                if (this.state.element.scrollTop === 0) {
                clearInterval(this.state.intervalId);
                this.setState({
                    incrementer: .0035
                }); 
            } 
            this.setState({
                incrementer: ((this.state.incrementer + .0035) * 3)
            });   
            this.state.element.scrollTo(0, this.state.element.scrollTop -  this.state.incrementer);
            
            // console.log("this.state.element.scrollTop:", this.state.element.scrollTop);
           // const newval:number =(this.state.incrementer/2)  +  Math.pow(this.state.incrementer *2, 2)/2;
            // this.setState({
            //     incrementer: newval + 2
            // });             

           // this.animate();            // onsole.log(this.state.element.scrollTop - this.state.incrementer);

         //  animateScroll.scrollToTop( {
            //     duration: 1500,               
            //     smooth: "easeInOutQuint" });
                   
       }    


       

    }
}

   // 
           // animateScroll.animateTopScroll(scrollOffset, props, to, target);
                // <section className="floating-button">
                //     <Fade in={this.state.isFadeIn}>
                //         <Button
                //             variant="fab"
                //             color="primary"
                //             aria-label="^"
                //             onClick={this.handleClick}>
                //             <Icon style={{ fontSize: 22 }}>expand_less</Icon>
                //         </Button>
                //     </Fade>
                // </section>               
                // constructor(props: any, state: ICADRWebPlatformState) {
                //     super(props);                    
                //     this.handleClick = this.handleClick.bind(this);
                //     this.handleScroll = this.handleScroll.bind(this);
                // }
                

