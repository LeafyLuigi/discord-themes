// Define Constants
const target = document.getElementsByClassName("layerContainer-2v_Sit")[1]; // Everything will be targeted towards this element
const types = ["lookFilled-1H2Jvj", "lookInverted-2GrLaB", "lookOutlined-3RTC7c", "lookLink-13iF2K", "lookBlank-FgPMy6"];
const typesName = ["Filled", "Inverted", "Outlined", "Link", "Blank"];
const colors = ["colorBrand-2M3O3N", "colorBrandNew-abZT3v", "colorGreen-jIPCAS", "colorLink-34zig_", "colorPrimary-2-Lusz", "colorRed-2VFhM4", "colorTransparent-2SBJ8-", "colorWhite-Eshn2o", "colorYellow-_9KFXL"];
const colorsName = ["Brand", "BrandNew", "Green", "Link", "Primary", "Red", "Transparent", "White", "Yellow"];
const colorsHover = ["hoverBrand-20zQAE", "hoverBrandNew-3CWLfn", "hoverGreen-2uVfsU", "hoverLink-2x5mtr", "hoverPrimary-3dWXRY", "hoverRed-2GS7Rt", "hoverTransparent-2WkMPh", "hoverWhite-27IZTy", "hoverYellow-2sBijX"];
const colorsBorder = ["borderBrand-dgox0N", "borderBrandNew-2SIdEy", "borderGreen-1aVjyv", "borderLink-1WFQnX", "borderPrimary-1HrinF", "borderRed-1R14vb", "borderTransparent-2adzs-", "borderWhite-3UfEYY", "borderYellow-21hDFd"];
const sizes = ["sizeTiny-2AAolP", "sizeSmall-3R2P2p", "sizeMedium-2oH5mg", "sizeLarge-2xP3-w", "sizeXlarge-2GQ4VO", "sizeTiny-2AAolP"]; // tiny at end for loops
const classButton = "button-ejjZWC";
const classHasHover = "hasHover-3y7IPU";
const classContent = "contents-3NembX";
const classSpinnerItem = "spinnerItem-3Y5NsU";
const classGrow = "grow-2T4nbg";
const classSubmitting = "submitting-3t0sbC";
const themes = ["theme-dark", "theme-light"]; // amoled nor custom will apply to this

const buttonGridClass = "buttonGridButton"; // This will be used for selecting elements and not for theming
const buttonBlankClass = "buttonGridBlank"; // also applies to blank's header. for toggling.
const styleBlankDisabled = "#grid>div:nth-child(6n){display:none}"; // This CSS is added to a style sheet when blanks are set to be hidden

const toolbarCategoryHeaders = ["Disabled Type", "Size", "Hover Color", "Theme", "Add Spinner Item", "Force Border Color", "Show Blank"];
const toolbarTitles = ["Options are \"None\", \":disabled\" and \"[aria-disabled=true]\"", "How big you want the buttons", "Hover class may not be used on all buttons", "Quick toggle between Dark and Light. Does not change your chosen option", "Toggles visibility of Spinner", "Force border color on outlined buttons", "Toggle visibility of Blank buttons"];
const disableOptions = ["None", ":disabled", "[aria-disabled=true]"];
const sizeOptions = ["Tiny", "Small", "Medium", "Large", "XLarge"];
const themeOptions = ["Dark", "Light"];
const boolOptions = ["False", "True"];
const hoverOptions = ["Brand", "BrandNew", "Green", "Link", "Primary", "Red", "Transparent", "White", "Yellow", "None"];
const borderOptions = hoverOptions;

// inline styles for certain elements
const classPageStyle = "box-sizing:border-box;pointer-events:auto;position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;padding:48px;background-color:var(--background-primary);overflow-y:scroll";
const classToolbarStyle = "grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;gap:12px;margin:0 0 24px;display:grid;align-items:center";
const classToolbarHeaderStyle = "color:var(--header-primary);font-family:var(--font-display);font-size:12px;line-height:16px;font-weight:700;text-transform:uppercase;letter-spacing:.02em";

// within toolbar will be the following: selectors (radio) for disabled, size selection, [bool] useHover, theme, [bool] addSpinner, [bool] showBorders, [bool] showBlank
//                                                            x|:d|aria  0-4/tiny-xlarge
const toolbarIds = ["disable", "size", "hover", "theme", "spinner", "border", "blank"]; // ids become <$input>Btn
const toolbarType = ["choice", "choice", "choice", "choice", "bool", "choice", "bool"];
const toolbarVariable = ["chosen_disabled", "chosen_size", "chosen_hover", "chosen_theme", "chosen_spinner", "chosen_border", "chosen_blank"];
const classGridStyle = "display:grid;grid-template-columns:var(--grid-cols,auto 1fr 1fr 1fr 1fr 1fr);gap:4px"; // the variable will update on a different element

const htmlPage = "<div style='"+classPageStyle+"'><div id='frank'>"; // frank's there to tell what grid cols will be :)
const htmlPageHeader = "<div style='display:flex;justify-content:space-between'><span><h2 style='color:var(--header-primary);font-weight:700;font-size:20px;font-family:var(--font-display);padding-right:12px'>Button Grid Playground</h2><i style='height:min-content;align-self:center;color:var(--text-normal);font-size:12px'>You can bring back this modal by pressing F3</i></span><div id='closeBtn' style='cursor:pointer;height:min-content;align-self:center;color:var(--text-normal);font-size:12px'>Close</div></div>";
const htmlToolbar = "<div id='toolbar'></div>";
// the entirety of the grid is a large list of elements, equal to the
const htmlGrid = "<div id='grid' style='"+classGridStyle+"'>"; // inner goes under this class
const htmlGridClose = "</div>";
const htmlPageClose = "</div></div>";


// vars relate to the html of grid
const btnHtml0 = "<div><button class=\"" + buttonGridClass + " " + classButton + " " + classGrow; // then add size + [border/hover]color + type (+ if blank, that class too)
const btnHtml1 = "\"><div class=\"" + classContent + "\">Button</div></button></div>"; // add content and close
const btnSpinnerHtml = '<span class="spinner-2RT7ZC spinner-3lTjTx"><span class="inner-26JK4f pulsingEllipsis-10G8Z6"><span class="pulsingEllipsisItem-3pNmEc spinnerItem-3dCJpG"></span><span class="pulsingEllipsisItem-3pNmEc spinnerItem-3dCJpG"></span><span class="pulsingEllipsisItem-3pNmEc spinnerItem-3dCJpG"></span></span></span>';

const labelSideHtml0 = "<div style=\"align-self:center;padding-right:8px;text-align:right;\"><h2 style='"+classToolbarHeaderStyle+"'";
const labelHeadHtml0 = "<div><h2 style='"+classToolbarHeaderStyle+"'"; // then if applicable add blank class

const labelAddNameHtml = "\">"; // add label
const labelCloseHtml = "</h2></div>";

const cornerHtml = "<div></div>"; // ez


// Set defaults
var chosen_disabled = 0; // 0 nothing applied, 1 applies :disabled, 2 applies [aria-disabled=true]
var chosen_size = 0; // [+1 RIGHT AWAY] tiny, small, medium, large, xlarge
// not an option but with sizes: full width can go with grow
var chosen_hover = 9; // goes through color list in order, 9 being none
var chosen_theme = 0 // dark, light; class gets added to #buttonGrid
var chosen_spinner = false; // true adds spinner to buttons
var chosen_border = 9; // goes through color list in order, 9 being none
var chosen_blank = true; // [INVERTED RIGHT AWAY] true shows the lookBlank set

// Add ID to Initial Target
function start() {
  target.setAttribute("id", "buttonGrid");
}


/// Functions
function closeBtn() {
  target.innerHTML = "";
  target.removeAttribute("id");
  target.setAttribute("class", "layerContainer-2v_Sit");
}

function updateGridColumns() {
  frank = document.getElementById("frank");
  if (chosen_blank) {
    frank.setAttribute("style","--grid-cols: auto 1fr 1fr 1fr 1fr");
    document.getElementById("blankInner").innerText = "False";
  } else {
    frank.setAttribute("style","--grid-cols: auto 1fr 1fr 1fr 1fr 1fr");
    document.getElementById("blankInner").innerText = "True";
  }
}

function disableBtn() {
  chosen_disabled++;
  chosen_disabled = chosen_disabled % 3;
  document.getElementById("disableInner").innerText = disableOptions[chosen_disabled];
  switch (chosen_disabled) {
    case 0: // no :disabled, no aria
      for (let i = 0; i < btns.length; i++) {
        btns[i].removeAttribute("aria-disabled");
      }
      break;
    case 1: // :disabled, no aria
      for (let i = 0; i < btns.length; i++) {
        btns[i].setAttribute("disabled", 1);
      }
      break;
    case 2: // no :disabled, aria
      for (let i = 0; i < btns.length; i++) {
        btns[i].removeAttribute("disabled");
        btns[i].setAttribute("aria-disabled", "true");
      }
    break;
  }
}

function sizeBtn() {
  oldSize = chosen_size;
  chosen_size++;
  chosen_size = chosen_size % 5;
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove(sizes[oldSize]);
    btns[i].classList.add(sizes[chosen_size]);
  }
  document.getElementById("sizeInner").innerText = sizeOptions[chosen_size];
}

function hoverBtn() {
  oldHover = chosen_hover;
  chosen_hover++;
  chosen_hover = chosen_hover % 10;
  for (let i = 0; i < btns.length; i++) {
    switch(chosen_hover) {
      case 9: // "none"
        btns[i].classList.remove(classHasHover);
        btns[i].classList.remove(colorsHover[oldHover]);
        break;
      case 0: // "brand"
        btns[i].classList.add(classHasHover);
        btns[i].classList.add(colorsHover[chosen_hover]);
        break;
      default: // "brandNew to yellow"
        btns[i].classList.remove(colorsHover[oldHover]);
        btns[i].classList.add(colorsHover[chosen_hover]);
        break;
    }
  }
  document.getElementById("hoverInner").innerText = hoverOptions[chosen_hover];
}

function themeBtn() {
  chosen_theme++;
  chosen_theme = chosen_theme % 2;
  if (chosen_theme == 0) {
    grid.classList.add("theme-dark");
    grid.classList.remove("theme-light");
  } else {
    grid.classList.remove("theme-dark");
    grid.classList.add("theme-light");
  }
  document.getElementById("themeInner").innerText = themeOptions[chosen_theme];
}

function spinnerBtn() {
  for (let i = 0; i < btns.length; i++) {
    if(chosen_spinner) {
      btns[i].classList.remove(classSubmitting);
      btns[i].firstChild.remove();
      document.getElementById("spinnerInner").innerText = "False";
    } else {
      btns[i].classList.add(classSubmitting);
      btns[i].insertAdjacentHTML("afterbegin", btnSpinnerHtml);
      document.getElementById("spinnerInner").innerText = "True";
    }
  }
  chosen_spinner = !chosen_spinner;
}

function borderBtn() {
  btnBorders = document.getElementsByClassName(types[2]+" "+buttonGridClass);
  oldBorder = chosen_border;
  chosen_border++;
  chosen_border = chosen_border % 10; // colorsBorder.length + 1 with 0 being "None"
  for (let i = 0; i < btnBorders.length; i++) {
    switch(chosen_border) {
      case 9: // "none"
        btnBorders[i].classList.remove(colorsBorder[oldBorder]);
        break;
      case 0: // "brand"
        btnBorders[i].classList.add(colorsBorder[chosen_border]);
        break;
      default: // "brandNew to yellow"
        btnBorders[i].classList.remove(colorsBorder[oldBorder]);
        btnBorders[i].classList.add(colorsBorder[chosen_border]);
        break;
    }
  }
  document.getElementById("borderInner").innerText = borderOptions[chosen_border];
}

function blankBtn() {
  btnBlanks = document.getElementsByClassName(buttonBlankClass);
  for (let i = 0; i < btnBlanks.length; i++) {
    if (chosen_blank) {
      btnBlanks[i].parentElement.setAttribute("hidden", true);
    } else {
      btnBlanks[i].parentElement.removeAttribute("hidden");
    }
  }
  updateGridColumns();
  chosen_blank = !chosen_blank;
}

function makeToolbarHtml() {
  htmlOut = "";
  items = toolbarCategoryHeaders.length;
  for (let i = 0; i < items; i++) {
    htmlOut += "<div><h2 title='"+toolbarTitles[i]+"' class='eyebrow-1Shfyi defaultColor-1GKx81'>"+toolbarCategoryHeaders[i]+"</h2>";
    htmlOut += "<button class='"+classButton+" "+classGrow+" "+colors[0]+" "+types[0]+" "+sizes[2]+"' id='"+toolbarIds[i]+"Btn' title='"+toolbarTitles[i]+"'>";
    htmlOut += "<div id='"+toolbarIds[i]+"Inner' class='"+classContent+"'>$value</div></button></div>";
  }
  toolbarElement.innerHTML = htmlOut;
  toolbarElement.setAttribute("style", classToolbarStyle);
}

function makePageHtml() {
  html = "";
  html += htmlPage + htmlPageHeader + htmlToolbar + htmlGrid + htmlGridClose + htmlPageClose;
  target.innerHTML = html;

  grid = document.getElementById("buttonGrid"); // Makes selecting it a wee bit easier
  gridInr = document.getElementById("grid"); // and for the inner grid
  toolbarElement = document.getElementById("toolbar");
}

function initButtonText() {
  for (let i = 0; i < items; i++) {
    if (toolbarType[i] == "choice") {
      document.getElementById(toolbarIds[i]+"Inner").innerText = eval(toolbarIds[i]+"Options")[eval(toolbarVariable[i])];
    } else if (toolbarType[i] == "bool") {
      document.getElementById(toolbarIds[i]+"Inner").innerText = eval(toolbarVariable[i]);
      document.getElementById(toolbarIds[i]+"Inner").setAttribute("style", "text-transform:capitalize")
    }
  }
}

function makeGridHtml() {
  // total amount of buttons should be 45. for labels: color +9, type +5 (+4 for blank off), +1 for corner. total is 60.
  let t = types.length; // type
  let c = colors.length; // color
  let cnr = 1; // corner
  let btns = t*c; // different kinds = T*C (45)
  let tot = btns + c + t + cnr; // total count in grid (45 + 9 + 5 + 1 = 60)
  let crntClr = -1;

  // html stuff
  let htmlOut = ""; // set initial string

  for (let gridCell = 0; gridCell < tot; gridCell++) {
    // headers
    if (gridCell < 6) {
      switch (gridCell) {
        case 0:
          htmlOut += cornerHtml;
          break;
        default:
          htmlOut += labelHeadHtml0;
          if (gridCell == 5) {
            htmlOut += " class='" + buttonBlankClass + "'";
          }
          htmlOut += labelAddNameHtml + typesName[gridCell - 1] + labelCloseHtml;
          break;
      }
    } else {
      if (gridCell % 6 == 0) {
        crntClr++;
        htmlOut += labelSideHtml0 + labelAddNameHtml + colorsName[crntClr] + labelCloseHtml;
      } else {
        htmlOut += btnHtml0 + " " + sizes[chosen_size] + " " + colors[crntClr] + " " + types[gridCell % 6 - 1];
        if (gridCell % 6 == 5) {
          htmlOut += " " + buttonBlankClass;
        }
        htmlOut += btnHtml1;
      }
    }
  }
  gridInr.innerHTML = htmlOut;
}

function initPage() {
  // set btns
  btns = document.getElementsByClassName(buttonGridClass);

  // set theme type
  if (document.getElementsByTagName('html')[0].classList.contains("theme-dark")) {
    grid.classList.toggle("theme-dark");
    chosen_theme = 0;
  } else {
    grid.classList.toggle("theme-light");
    chosen_theme = 1;
  }

  document.getElementById("closeBtn").addEventListener("click", closeBtn);
  document.getElementById("disableBtn").addEventListener("click", disableBtn);
  document.getElementById("sizeBtn").addEventListener("click", sizeBtn);
  document.getElementById("hoverBtn").addEventListener("click", hoverBtn);
  document.getElementById("themeBtn").addEventListener("click", themeBtn);
  document.getElementById("spinnerBtn").addEventListener("click", spinnerBtn);
  document.getElementById("borderBtn").addEventListener("click", borderBtn);
  document.getElementById("blankBtn").addEventListener("click", blankBtn);
}

start()
makePageHtml();
makeToolbarHtml();
makeGridHtml();
initPage();
initButtonText();
blankBtn();
sizeBtn();

window.addEventListener("keydown", event => {
  if (event.key === "F3") {
    start();
    makePageHtml();
    makeToolbarHtml();
    makeGridHtml();
    initPage();
    initButtonText();
  }
});