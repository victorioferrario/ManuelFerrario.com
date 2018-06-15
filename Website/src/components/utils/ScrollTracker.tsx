export default class HtmlElementWatcher {
  public element: any;
  public elementTrigger: any;
  constructor(callBack:any) {
    if (document.getElementById("appContentId") != null) {
      this.element = document.getElementById("appContentId");
      if (this.element) {
        this.element.addEventListener("scroll", this.handleScroll);
      }
    }
  }
  
  public handleScroll() {
    const element = document.getElementById("appContentId");
    const elementAppBar = document.getElementById("appBar");
    const elementScrollLabel = document.getElementById("scrollCountLabel");
    if (elementAppBar) {   
        if (element) {
          if (elementScrollLabel) {
            if (element.scrollTop > 100) {               
              elementScrollLabel.innerHTML = element.scrollTop.toString();
            }
            if (element.scrollTop < 99) {    
              elementScrollLabel.innerHTML = element.scrollTop.toString();
            }
          }
        }      
    }













    
  }
}
// export default ScrollTracker;
