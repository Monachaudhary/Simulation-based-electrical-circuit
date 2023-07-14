function plotData() {
  if (
    values["AC1"]["volt"] != 0 &&
    values["AC1"]["freq"] != 0 &&
    values["R2"]["value"] != 0 &&
    values["GTP2"]["fire"] != 0 &&
    values["GTP3"]["fire"] != 0 
  ) {
    const wave_forms = generategraph();
    console.log(wave_forms)
    var graph = document.getElementById("graph-new");
    graph.innerHTML = "";
    graph.style.height = "800px";
    var graph_element = document.createElement("div");
    graph_element.id = "sine_input";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "sine_input",
      [
        {
          x: wave_forms[1][1],
          y: wave_forms[1][0],
          mode: "lines",
          name: "VINP",
          marker: {
            color: "Orange",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM3"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0]) + 10),
            parseInt(wave_forms[0][0]) + 10,
          ],
          title: "<b>Amplitude(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "gate_pulse";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "gate_pulse",
      [
        {
          x: wave_forms[2][1],
          y: wave_forms[2][0],
          mode: "lines",
          name: "VGP1",
          marker: {
            color: "Red",
          },
        },
        {
          x: wave_forms[3][1],
          y: wave_forms[3][0],
          mode: "lines",
          name: "VGP2",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM2"]["name"].toUpperCase() + "<b>" + values["VM6"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1, 1.5],
          title: "<b>Gate pulse</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_voltage",
      [
        {
          x: wave_forms[4][1],
          y: wave_forms[4][0],
          mode: "lines",
          name: "VL   ",
          marker: {
            color: "Green",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM4"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0]) + 10),
            parseInt(wave_forms[0][0]) + 10,
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_current";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_current",
      [
        {
          x: wave_forms[5][1],
          y: wave_forms[5][0],
          mode: "lines",
          name: "IL   ",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["A1"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][1])+(((1/10)*parseInt(wave_forms[0][1])))+1),
            parseInt(wave_forms[0][1]) + (((1/10)*parseInt(wave_forms[0][1])))+1,
          ],
          title: "<b>Current(A)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
  
  graph_element = document.createElement("div");
  graph_element.id = "thyristor_voltage";
  graph_element.classList.add("graph-style");
  graph.append(graph_element);
  Plotly.newPlot(
    "thyristor_voltage",
    [
      {
        x: wave_forms[6][1],
        y: wave_forms[6][0],
        mode: "lines",
        name: "VT",
        marker: {
          color: "#ff7000",
        },
      },
      {
        x: [0],
        y: [0],
        mode: "lines",
        name: "",
        marker: {
          color: "White",
        },
      },
    ],
    {
      title: "<b>" + values["VM1"]["name"].toUpperCase() + "</b>",
      xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
      yaxis: {
        range: [
          -1 * (parseInt(wave_forms[0][0]) + 10),
          parseInt(wave_forms[0][0]) + 10,
        ],
        title: "<b>Voltage(V)</b>",
        fixedrange: true,
      },
      margin: { t: 35 },
    },
    { displayModeBar: false }
  );

  graph_element = document.createElement("div");
  graph_element.id = "thyristor_voltage2";
  graph_element.classList.add("graph-style");
  graph.append(graph_element);
  Plotly.newPlot(
    "thyristor_voltage2",
    [
      {
        x: wave_forms[7][1],
        y: wave_forms[7][0],
        mode: "lines",
        name: "VT2",
        marker: {
          color: "Blue",
        },
      },
      {
        x: [0],
        y: [0],
        mode: "lines",
        name: "",
        marker: {
          color: "White",
        },
      },
    ],
    {
      title: "<b>" + values["VM5"]["name"].toUpperCase() + "</b>",
      xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
      yaxis: {
        range: [
          -1 * (parseInt(wave_forms[0][0]) + 10),
          parseInt(wave_forms[0][0]) + 10,
        ],
        title: "<b>Voltage(V)</b>",
        fixedrange: true,
      },
      margin: { t: 35 },
    },
    { displayModeBar: false }
  );
}
}
function generategraph() {
  var sineamp = values["AC1"]["volt"];
  const freq = values["AC1"]["freq"];
  const sta = values["GTP2"]["freq"];
  const end = values["GTP2"]["fire"];
  const st = values["GTP3"]["freq"];
  const ed = values["GTP3"]["fire"];
  var resistance = values["R2"]["value"];
  var timep = 1 / freq;
  var timp = timep;
  var sine_wave = [],
  flag = false;
  var sin_fun;
  var starting = (timep / 360) * sta;
  var ending = (timep / 360) * end;
  var starting1 = (timep / 360) * st;
  var ending1 = (timep / 360) * ed;
  var xval = [];
  current = [],
  load_voltage = [],
  thyristor_voltage = [],
  thyristor_voltage2 = [],
  gate_pulse = [];
  gate_pulse1 = [];
  for (let x = 0; x <= 0.06; x += 0.00001) {
    sin_fun = sineamp * Math.sin(2 * Math.PI * freq * x);
    sine_wave.push(sin_fun);
    xval.push(x);
    if (sin_fun > 0) {
      if (x >= starting) {
        load_voltage.push(sin_fun);
        current.push(sin_fun / parseInt(resistance));
        thyristor_voltage.push(0);
        thyristor_voltage2.push(-1 * sin_fun);
      } else {
        load_voltage.push(0);
        thyristor_voltage.push(sin_fun);
        thyristor_voltage2.push(-1 * (sin_fun / 2));
        current.push(0);
      }
    }  else {
      if (x <= ending1) {
        if (x >= starting1) {
          load_voltage.push(-1 * sin_fun);
          thyristor_voltage2.push(0);
          thyristor_voltage.push(sin_fun);
          current.push((-1 * sin_fun) / parseInt(resistance));
          flag = true;
        } else {
          load_voltage.push(0);
          current.push(0);
          thyristor_voltage.push(-1 * (sin_fun / 2));
          thyristor_voltage2.push(sin_fun / 2);
        }
      } else if (flag) {
        load_voltage.push(-1 * sin_fun);
        thyristor_voltage.push(0);
        thyristor_voltage2.push(sin_fun);
        current.push((-1 * sin_fun) /  parseInt(resistance));
      } else {
        load_voltage.push(0);
        current.push(0);
        thyristor_voltage2.push(-1 * (sin_fun / 2));
        thyristor_voltage.push(sin_fun / 2);
      }
    }
    
    if (starting <= x && x <= ending) {
      gate_pulse.push(1);
    } else {
      gate_pulse.push(0);
    }

    if (starting1 <= x && x <= ending1) {
      gate_pulse1.push(1);
    } else {
      gate_pulse1.push(0);
    }
    if (x >= timep) {
      starting = starting + timp;
      ending = ending + timp;
      starting1 = starting1 + timp;
      ending1 = ending1 + timp;
      timep = timep + timp;
      flag = false;
    }
  
  }

  var vavg=(sineamp/(2*Math.PI))*(1+(Math.cos(sta*(Math.PI/180))));
  var iavg=vavg/resistance;
  var vrms=(sineamp/(2*Math.sqrt(Math.PI)))*(Math.sqrt(Math.PI-(sta*(Math.PI/180))+(Math.sin(2*(sta*(Math.PI/180)))/2)));
  iavg =iavg*100;
  vavg=vavg*100;
  vrms=vrms*100;
  vavg=parseInt(vavg);
  iavg=parseInt(iavg);
  vrms=parseInt(vrms);
  values['vavg']=(vavg/100);
  values['iavg']=(iavg/100);
  values['vrms']=(vrms/100);

  return [
    [sineamp, sineamp / resistance],
    [sine_wave, xval],
    [gate_pulse, xval],
    [gate_pulse1, xval],
    [load_voltage, xval],
    [current, xval],
    [thyristor_voltage, xval],
    [thyristor_voltage2, xval],
   
  ];
}
