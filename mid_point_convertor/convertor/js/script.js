var count = 0;
var correct_connections =
[

  ['VM1L', 'THY1L'],
  ['VM1R', 'THY1R'],
  ['THY1RB', 'GTP2R'],
  ['GTP2R', 'VM2T'],
  ['VM2B', 'gnd2'],
  ['TF3RU', 'THY1L'],
  ['THY1R', 'A1R'],
  ['VM3T', 'AC1T'],
  ['VM3B', 'AC1B'],
  ['AC1T', 'TF1U'],
  ['AC1B', 'TF2L'],
  ['TC4RM', 'R2T'],
  ['A1R', 'THY2R'],
  ['R2T', 'VM4L'],
  ['R2B', 'VM4R'],
  ['TC5RL', 'THY2L'],
  ['VM5L', 'THY2L'],
  ['VM5R', 'THY2R'],
  ['THY2RB', 'GTP3R'],
  ['VM6T', 'GTP3R'],
  ['VM6B', 'gnd3'],
  ['R2B', 'A1L'],
  
];

var voltagemids = ["VM4-back", "VM3-back", "VM2-back", "VM1-back","VM5-back","VM6-back"];
var thyids = ["THY1-back","THY2-back"];
var amids = ["ammeter-back"];
var gtpids = ["GTP3-back","GTP2-back"];
var gndids = ["GND3-back","GND2-back"];
var acids = ["AC1-back"];
var rids = ["R2-back"];
var transformerds = ["transformer-back"];
var values = {
  R2: {
    name: "Resistor",
    value: 0,
    type: "Resistance: ",
    unit: " Ω" ,
  },
  AC1: {
    name: "AC Source",
    volt: 0,
    freq: 0,
    type1: "Voltage: ",
    type2: "Frequency: ",
    unitfreq: " Hz",
    unit: "V",
  },

  VM1: {
    name: "Thyristor Voltage 1",
  },
  VM5: {
    name: "Thyristor Voltage 2",
  },
  VM2: {
    name: "Firing Pulse",
  },
  GND2: {
    name: "GND",
  },
  GND3: {
    name: "GND2",
  },
  A1: {
    name: "Load Current",
  },
  TF: {
    name: "3-W Transformer",
  },
  THY1:{name:"Thyristor 1",},
  THY2:{name:"Thyristor 2",},
  
  GTP2: {
    name: "Gate Pulse 1",
    freq: 0,
    fire: 0,
    type1: "Frequency: ",
    type2: "Fire Angle: ",
    unitfreq: "\u00B0 ",
    unit: "\u00B0",
  },
  GTP3: {
    name: "Gate Pulse 2",
    freq: 0,
    fire: 0,
    type1: "Frequency: ",
    type2: "Fire Angle: ",
    unitfreq: "\u00B0  ",
    unit: "\u00B0",
  },

 

  VM3: { name: "Input Voltage" },
  VM4: { name: "Load Voltage" },
  GND3: { name: "GND2" },
  VM2: { name: "Gate pulse Voltage" },
  VM6: { name: "" },
};
var endpoints = {};
var user_connection = [];
var wrong_connection = [];
var correct_connections_flag = false;

var instance = jsPlumb.getInstance({ConnectionsDetachable:false});
instance.bind("ready", () => {
  createEnd();
  $("#symbolpalette .ele-img").draggable({
    helper: "clone",
    containment: "body",
    appendTo: "#diagram",
  });
  $("#diagram").droppable({
    drop: (event, ui) => {
      if ($(ui.helper).hasClass("resistor-sym")) {
        var a = rids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
        } else {
        }
      } else if ($(ui.helper).hasClass("thy-sym")) {
        var a = thyids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
        } else {
        }
      } else if ($(ui.helper).hasClass("ac-sym")) {
        var a = acids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
        } else {
        }
      } else if ($(ui.helper).hasClass("gate-sym")) {
        var a = gtpids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
        } else {
        }
      } else if ($(ui.helper).hasClass("volt-sym")) {
        var a = voltagemids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
        } else {
        }
      } else if ($(ui.helper).hasClass("gnd-sym")) {
        var a = gndids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
        }
      } else if ($(ui.helper).hasClass("am-sym")) {
        var a = amids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
        } else {
        }
      } else if ($(ui.helper).hasClass("transformer-sym")) {
        var a = transformerds.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
        } else {
        }
      }
    },
  });

  //if (component.hasClass("jtk-connector"))
  function createEnd() {
    var stokwid = "3.5";
    
    var VM1L = instance.addEndpoint("VM1L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints['VM1L']=VM1L;

    var VM1R = instance.addEndpoint("VM1R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints['VM1R']=VM1R;

    var VM2T = instance.addEndpoint("VM2T", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints['VM2T']=VM2T;

    var VM2B = instance.addEndpoint("VM2B", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },

    });endpoints['VM2B']=VM2B;

    var VM3T = instance.addEndpoint("VM3T", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints['VM3T']=VM3T;

    var VM3B = instance.addEndpoint("VM3B", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints['VM3B']=VM3B;

    var VM4L = instance.addEndpoint("VM4L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints['VM4L']=VM4L;

    var VM4R = instance.addEndpoint("VM4R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints['VM4R']=VM4R;

    var THY1R = instance.addEndpoint("THY1R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["THY1R"]=THY1R;

    var THY1RB = instance.addEndpoint("THY1RB", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["THY1RB"]=THY1RB;

    var THY1L = instance.addEndpoint("THY1L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["THY1L"]=THY1L;

    var A1L = instance.addEndpoint("A1L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["A1L"]=A1L;

    var A1R = instance.addEndpoint("A1R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["A1R"]=A1R;

    var GTP2R = instance.addEndpoint("GTP2R", {
      anchor: ["Center"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["GTP2R"]=GTP2R;

    var gnd2 = instance.addEndpoint("gnd2", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["gnd2"]=gnd2;

    var AC1T = instance.addEndpoint("AC1T", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["AC1T"]=AC1T;

    var AC1B = instance.addEndpoint("AC1B", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["AC1B"]=AC1B;

    var R2T = instance.addEndpoint("R2T", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["R2T"]=R2T;

    var R2B = instance.addEndpoint("R2B", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["R2B"]=R2B;

    var gnd3 = instance.addEndpoint("gnd3", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["gnd3"]=gnd3;

    var VM5L = instance.addEndpoint("VM5L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["VM5L"]=VM5L;

    var VM5R = instance.addEndpoint("VM5R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["VM5R"]=VM5R;

    var GTP3R = instance.addEndpoint("GTP3R", {
      anchor: ["Center"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["GTP3R"]=GTP3R;

    var VM6T= instance.addEndpoint("VM6T", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["VM6T"]=VM6T;

    var VM6B = instance.addEndpoint("VM6B", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["VM6B"]=VM6B;

    var THY2R = instance.addEndpoint("THY2R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["THY2R"]=THY2R;

    var THY2L = instance.addEndpoint("THY2L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["THY2L"]=THY2L;

    var THY2RB = instance.addEndpoint("THY2RB", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["THY2RB"]=THY2RB;

    var TF1U = instance.addEndpoint("TF1U", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TF1U"]=TF1U;

    var TF2L = instance.addEndpoint("TF2L", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TF2L"]=TF2L;

    var TF3RU = instance.addEndpoint("TF3RU", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TF3RU"]=TF3RU;

    var TC4RM = instance.addEndpoint("TC4RM", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TC4RM"]=TC4RM;

    var TC5RL = instance.addEndpoint("TC5RL", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TC5RL"]=TC5RL;
  }


  window.addEventListener("resize", () => {
    instance.deleteEveryEndpoint();

    createEnd();
    
    var per_connect = user_connection;
    for (var i of per_connect) {
      instance.connect({
        source: endpoints[i[0]],
        target: endpoints[i[1]],
      });
      user_connection.pop();
    }if(correct_connections_flag){
      plotData();
    }
  });

  instance.bind("connection", (conn, event) => {
    var flag = true;
    let eg1 = [String(conn.sourceId), String(conn.targetId)];

    for (var ele of correct_connections) {
      if (
        (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
        (ele[0] == eg1[1] && ele[1] == eg1[0])
      ) {
        flag = false;

        user_connection.push(eg1);

        break;
      }
    }
    if (flag) {
      conn.connection._jsPlumb.paintStyleInUse.stroke = "red";
      wrong_connection.push(eg1);
      alert("Wrong Connection");
    }
    
  });
  function detach(a) {
    instance.deleteConnection(a);
  }
  instance.bind("click", function (conn) {
    let eg1 = [String(conn.sourceId), String(conn.targetId)];
    if(!correct_connections_flag){

    for (var ele of correct_connections) {
      if (
        (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
        (ele[0] == eg1[1] && ele[1] == eg1[0])
      ) {
        user_connection.pop(eg1);
        break;
      }
    }
    for (var ele of wrong_connection) {
      if (
        (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
        (ele[0] == eg1[1] && ele[1] == eg1[0])
      ) {
        wrong_connection.pop(eg1);
        break;
      }
    }
      
      instance.deleteConnection(conn);
    }

    return false;
  });
  $("body").on("contextmenu","#components",(event)=>{
    event.preventDefault();
  })

  // context-menu for resistor
  $("body").on("contextmenu", "#diagram .resistor", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

   if (correct_connections_flag) {
    $(
      '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
        window.selectedControl +
        '"></button></div></div></div><form action="#" onsubmit="DcSubmited(' +
        "'" +
        window.selectedControl +
        "'" +
        ')"><div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input type="text" class="set-input-name" id="name-' +
        window.selectedControl +
        '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
        window.selectedControl +
        '">Resistance:</label><input type="number" class="set-input" placeholder=" ' +
        values[window.selectedControl]["value"] +
        ' &Omega;" min="1" max="100"  id="value-' +
        window.selectedControl +
        '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
   }else{
    $(
      '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
        window.selectedControl +
        '"></button></div></div></div><form action="#" onsubmit="DcSubmited(' +
        "'" +
        window.selectedControl +
        "'" +
        ')"><div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input type="text" class="set-input-name" id="name-' +
        window.selectedControl +
        '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
        window.selectedControl +
        '">Resistance:</label><input type="number" class="set-input" placeholder="  ' +
        values[window.selectedControl]["value"] +
        ' &Omega;" min="1" max="100"  disabled id="value-' +
        window.selectedControl +
        '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
   }
   

    // context menu for capacitor

    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
 
  //for acsource
  $("body").on("contextmenu", "#diagram .acsource", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");
    
    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label style="color:white;" for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="50" max="350"  id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="1" max="60"  id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }else{
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="100" disabled id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="0" max="60" disabled id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

$("body").on("contextmenu", "#diagram .other", function (event) {
  event.preventDefault();
  $("div.custom-menu").remove();
  window.selectedControl = $(this).attr("id");

  $(
    '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
      window.selectedControl +
      '">Name:</label><input type="text" maxlength="5" id="name-' +
      window.selectedControl +
      '" class="set-input-name" placeholder="   ' +
      values[window.selectedControl]["name"] +
      '" onchange="changeName(' +
      "'" +
      window.selectedControl +
      "'" +
      ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
  )
    .appendTo("body")
    .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
  $(".submit").bind("click", function (event) {
    $("div.custom-menu").remove();
  });
});

  // contextmenu for gatepulse
  $("body").on("contextmenu", "#diagram .gatepulse", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;   width: 160px;"  maxlength="4"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0 " min="0" max="180"  id="value-freq-' +
          window.selectedControl +
          "" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="0" max="180" style="    position: relative;left: 6px;"  id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;     width: 160px;" maxlength="4" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0" min="0" max="180" disabled id="value-freq-' +
          window.selectedControl +
          "'" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="0" max="180" style="    position: relative;left: 6px;" disabled id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  $("body").on("contextmenu", "#diagram .gatepulse2", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;   width: 160px;"  maxlength="4"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0 " min="0" max="360"  id="value-freq-' +
          window.selectedControl +
          "" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="0" max="360" style="    position: relative;left: 6px;"  id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;     width: 160px;" maxlength="4" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0" min="0" max="360" disabled id="value-freq-' +
          window.selectedControl +
          "'" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="0" max="360" style="    position: relative;left: 6px;" disabled id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });


});

function vlotEnter(no, value) {
  values[no]["volt"] = value;
  var ele = no + "-volt";
  $("#" + ele).text(value + " volt");
  if (correct_connections_flag) {
    plotData();
  }
}
function freqEnter(no, value) {
  values[no]["freq"] = value;
  var ele = no + "-freq";
  $("#" + ele).text(value + " Hz");
  if (correct_connections_flag) {
    plotData();
  }
}

function changeName(name, value) {
  values[name]["name"] = value.toUpperCase();
  var ele = name + "-name";
  $("#" + ele).text(values[name]["name"]);
  if (correct_connections_flag) {
    plotData();
  }
}

function changeValue(no, value) {
  values[no]["value"] = value;
  var ele = no + "-value";
  $("#" + ele).text(value + values[no]["unit"]);
}
function dcSubmited(name) {
  var a = parseInt(document.getElementById("value-freq-" + name).value);
  var fire = parseInt(document.getElementById("value-fire-" + name).value);
  var ele;
  if (!Number.isNaN(a) && !Number.isNaN(fire)) {
    if (a >= fire) {
      alert("Firing angle should be in increasing order");
    } else {
      new_reading = true;
      values[name]["fire"] = fire;
      ele = name + "-fire";
      $("#" + ele).text(values[name]["fire"] + values[name]["unit"]);

      // Check if the gate pulse is part of a connected pair
      var connectedGatePulse = getConnectedGatePulse(name);
      if (connectedGatePulse) {
        values[connectedGatePulse]["fire"] = fire;
        $("#value-fire-" + connectedGatePulse).val(fire);
        $("#" + connectedGatePulse + "-fire").text(
          values[connectedGatePulse]["fire"] +
            values[connectedGatePulse]["unit"]
        );
      }
      values[name]["freq"] = a;
      ele = name + "-freq";
      $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);

      // Check if the gate pulse is part of a connected pair
      var connectedGatePulse = getConnectedGatePulse(name);
      if (connectedGatePulse) {
        values[connectedGatePulse]["freq"] = a;
        $("#value-freq-" + connectedGatePulse).val(a);
        $("#" + connectedGatePulse + "-freq").text(
          values[connectedGatePulse]["freq"] +
            values[connectedGatePulse]["unitfreq"]
        );
      }
    }
  } else {
    if (!Number.isNaN(fire)) {
      if (values[name]["freq"] == 0) {
        alert("Starting angle is Empty");
      } else if (fire <= values[name]["freq"]) {
        alert("Firing angle should be in increasing order");
      } else {
        new_reading = true;
        values[name]["fire"] = fire;
        ele = name + "-fire";
        $("#" + ele).text(values[name]["fire"] + values[name]["unit"]);

        // Check if the gate pulse is part of a connected pair
        var connectedGatePulse = getConnectedGatePulse(name);
        if (connectedGatePulse) {
          values[connectedGatePulse]["fire"] = fire;
          $("#value-fire-" + connectedGatePulse).val(fire);
          $("#" + connectedGatePulse + "-fire").text(
            values[connectedGatePulse]["fire"] +
              values[connectedGatePulse]["unit"]
          );
        }
      }
    }

    if (!Number.isNaN(a)) {
      if (values[name]["fire"] == 0) {
        alert("Ending angle is Empty");
      } else if (a >= values[name]["fire"]) {
        alert("Firing angle should be in increasing order");
      } else {
        new_reading = true;
        values[name]["freq"] = a;
        ele = name + "-freq";
        $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);

        // Check if the gate pulse is part of a connected pair
        var connectedGatePulse = getConnectedGatePulse(name);
        if (connectedGatePulse) {
          values[connectedGatePulse]["freq"] = a;
          $("#value-freq-" + connectedGatePulse).val(a);
          $("#" + connectedGatePulse + "-freq").text(
            values[connectedGatePulse]["freq"] +
              values[connectedGatePulse]["unitfreq"]
          );
        }
      }
    }
  }

  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}
function getConnectedGatePulse(name) {
  var connectedPairs = [
    ["GTP2", ""],
    ["GTP3", ""],
  ];

  // the connected pair that contains the given gate pulse name
  var connectedPair = connectedPairs.find((pair) => pair.includes(name));

  if (connectedPair) {
    var connectedGatePulse = connectedPair.find(
      (gatePulse) => gatePulse !== name
    );
    return connectedGatePulse;
  }

  return null;
}

function acSubmited(name) {
  var volt = document.getElementById("value-volt-" + name).value;
  var ele;
  if (volt != "") {
    values[name]["volt"] = volt;
    ele = name + "-volt";
    $("#" + ele).text(values[name]["volt"] + values[name]['unit']);
    new_reading=true;
  }
  var freq = document.getElementById("value-freq-" + name).value;
  if (freq != "") {
    values[name]["freq"] = freq;
    ele = name + "-freq";new_reading=true;
    $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);
  }
  document.getElementById("submit-" + name).click();
  if (correct_connections_flag) {
    plotData();
  }
}
function DcSubmited(name) {
  var a = document.getElementById("value-" + name).value;
  if (a != "") {
    new_reading = true;
    values[name]["value"] = a;
    var ele = name + "-value";
    new_reading = true;
    $("#" + ele).text(values[name]["value"] + values[name]["unit"]);
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}
function instchange() {
  document.getElementById("inst").classList.toggle("inst-display");
}

$(document).ready(function () {
  $("#data").on("click", function () {
    $("#readings").show();
  });
});
document.getElementById("check1").addEventListener("click", () => {
  if (wrong_connection.length == 0) {
    if (user_connection.length < 22) {
      alert("Make all the connections");
    } else {
      alert("All connections are connected");

      correct_connections_flag = true;
    }
  } else {
    alert("Wrong connection present in the circuit");
  }
});
var count = 1;
var new_reading=true;
function showreadings() {
  if (correct_connections_flag) {
    if (
      values["AC1"]["volt"] != 0 &&
      values["AC1"]["freq"] != 0 &&
      values["R2"]["value"] != 0 &&
      values["GTP2"]["fire"] != 0 &&
      values["GTP3"]["fire"] != 0 
    ){

    if (new_reading){

    
    if (count<9) {
      document.getElementById("Taken_reading").style.display = "block";
      var a = document.getElementById("tab");
      var b = a.innerHTML;
      var str =
        "<tr><td>" +
        count +
        "</td><td>" +
        values['vrms']+
        "</td><td>" +
        values["vavg"] +
        "</td><td>" +
        values['iavg'] +
        "</td></tr>";
      a.innerHTML = b + str;
      count = count + 1;
      new_reading=false;
    }
    else{
      alert("You can add only 8 readings in the table");
    }}
  }}
}

