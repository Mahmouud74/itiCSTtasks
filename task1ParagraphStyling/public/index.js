var elem = document.getElementById("PAR");
// var fontFamily;
// var textAlign;
// var lineHeight;
// var letterSpacing;
// var textIndent; 
// var textTransform;
// var textDecoratio;
// var textBorder;
// var BorderColor;
// var fontRadio= document.getElementsByName("Font");
// var alignRadio= document.getElementsByName("Align");
// var heightRadio= document.getElementsByName("Height");
// var lspaceRadio= document.getElementsByName("Lspace");
// var indentRadio= document.getElementsByName("Indent");
// var trasnformRadio= document.getElementsByName("Transform");
// var decorateRadio= document.getElementsByName("Decorate");
// var borderRadio= document.getElementsByName("Border");
// var borderColorRadio= document.getElementsByName("BorderColor");
    function ChangeFont(font) {
        //console.log(elem);
        elem.style.fontFamily=font;        
    }
    function ChangeAlign(align) {
        elem.style.textAlign=align
    }
    function ChangeHeight(height) {
        elem.style.lineHeight=height;
    }
    function ChangeLSpace(lspace) {
     elem.style.letterSpacing=lspace; 
    }
    function ChangeIndent(indent) {
     elem.style.textIndent=indent;   
    }
    function ChangeTransform(transform){
        elem.style.textTransform=transform
    }
    function ChangeDecorate(decorate) {
     elem.style.textDecoration=decorate   
    }
    function ChangeBorder(borderType) {
     elem.style.border=borderType
    }
    function ChangeBorderColor(borderColor) {
     elem.style.borderColor=borderColor;   
    }



    