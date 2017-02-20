
function draw_HeatMap(tabel){
	var margin = { top: 80, right: 20, bottom: 50, left: 150 },
	 cellSize=10;
	 col_number=252;
	 row_number=20;
	 width = cellSize*col_number, // - margin.left - margin.right,
	 height = cellSize*row_number , // - margin.top - margin.bottom,
	 //gridSize = Math.floor(width / 24),
	 legendElementWidth = cellSize*2.5,
	 colorBuckets = 20,
	 colors = ['#005824','#1A693B','#347B53','#4F8D6B','#699F83','#83B09B','#9EC2B3','#B8D4CB','#D2E6E3','#EDF8FB','#FFFFFF','#F1EEF6','#E6D3E1','#DBB9CD','#D19EB9','#C684A4','#BB6990','#B14F7C','#A63467','#9B1A53','#91003F'];
	 hcrow = [1, 2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,  101,  102,  103,  104,  105,  106,  107,  108,  109,  110,  111,  112,  113,  114,  115,  116,  117,  118,  119,  120,  121,  122,  123,  124,  125,  126,  127,  128,  129,  130,  131,  132,  133,  134,  135,  136,  137,  138,  139,  140,  141,  142,  143,  144,  145,  146,  147,  148,  149,  150,  151,  152,  153,  154,  155,  156,  157,  158,  159,  160,  161,  162,  163,  164,  165,  166,  167,  168,  169,  170,  171,  172,  173,  174,  175,  176,  177,  178,  179,  180,  181,  182,  183,  184,  185,  186,  187,  188,  189,  190,  191,  192,  193,  194,  195,  196,  197,  198,  199,  200,  201,  202,  203,  204,  205,  206,  207,  208,  209,  210,  211,  212,  213,  214,  215,  216,  217,  218,  219,  220,  221,  222,  223,  224,  225,  226,  227,  228,  229,  230,  231,  232,  233,  234,  235,  236,  237,  238,  239,  240,  241,  242,  243,  244,  245,  246,  247,  248,  249,  250,  251,  252], // change to gene name or probe id
	 hccol = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], // change to gene name or probe id
	 rowLabel = ['com1','com2','com3','com4','com5','com6','com7','com8','com9','com10','com11','com12','com13','com14','com15','com16','com17','com18','com19','com20'], 
	//change to gene name or probe id
	 colLabel = ['2-Jan' , '5-Jan', '6-Jan', '7-Jan', '8-Jan', '9-Jan', '12-Jan', '13-Jan', '14-Jan', '15-Jan', '16-Jan', '20-Jan', '21-Jan', '22-Jan', '23-Jan', '26-Jan', '27-Jan', '28-Jan', '29-Jan', '30-Jan', '2-Feb', '3-Feb', '4-Feb', '5-Feb', '6-Feb', '9-Feb', '10-Feb', '11-Feb', '12-Feb', '13-Feb', '17-Feb', '18-Feb', '19-Feb', '20-Feb', '23-Feb', '24-Feb', '25-Feb', '26-Feb', '27-Feb', '1-Mar', '2-Mar', '3-Mar', '4-Mar', '5-Mar', '8-Mar', '9-Mar', '10-Mar', '11-Mar', '12-Mar', '15-Mar', '16-Mar', '17-Mar', '18-Mar', '19-Mar', '22-Mar', '23-Mar', '24-Mar', '25-Mar', '26-Mar', '29-Mar', '30-Mar', '31-Mar', '1-Apr', '2-Apr', '5-Apr', '6-Apr', '7-Apr', '8-Apr', '12-Apr', '13-Apr', '14-Apr', '15-Apr', '16-Apr', '19-Apr', '20-Apr', '21-Apr', '22-Apr', '23-Apr', '26-Apr', '27-Apr', '28-Apr', '29-Apr', '30-Apr', '3-May', '4-May', '5-May', '6-May', '7-May', '10-May', '11-May', '12-May', '13-May', '14-May', '17-May', '18-May', '19-May', '20-May', '21-May', '24-May', '25-May', '26-May', '27-May', '28-May', '1-Jun', '2-Jun', '3-Jun', '4-Jun', '7-Jun', '8-Jun', '9-Jun', '10-Jun', '14-Jun', '15-Jun', '16-Jun', '17-Jun', '18-Jun', '21-Jun', '22-Jun', '23-Jun', '24-Jun', '25-Jun', '28-Jun', '29-Jun', '30-Jun', '1-Jul', '2-Jul', '6-Jul', '7-Jul', '8-Jul', '9-Jul', '12-Jul', '13-Jul', '14-Jul', '15-Jul', '16-Jul', '19-Jul', '20-Jul', '21-Jul', '22-Jul', '23-Jul', '26-Jul', '27-Jul', '28-Jul', '29-Jul', '30-Jul', '2-Aug', '3-Aug', '4-Aug', '5-Aug', '6-Aug', '9-Aug', '10-Aug', '11-Aug', '12-Aug', '13-Aug', '16-Aug', '17-Aug', '18-Aug', '19-Aug', '20-Aug', '23-Aug', '24-Aug', '25-Aug', '26-Aug', '27-Aug', '30-Aug', '31-Aug', '1-Sep', '2-Sep', '3-Sep', '7-Sep', '8-Sep', '9-Sep', '10-Sep', '13-Sep', '14-Sep', '15-Sep', '16-Sep', '17-Sep', '20-Sep', '21-Sep', '22-Sep', '23-Sep', '24-Sep', '27-Sep', '28-Sep', '29-Sep', '30-Sep', '1-Oct', '4-Oct', '5-Oct', '6-Oct', '7-Oct', '8-Oct', '11-Oct', '12-Oct', '13-Oct', '14-Oct', '15-Oct', '18-Oct', '19-Oct', '20-Oct', '21-Oct', '22-Oct', '25-Oct', '26-Oct', '27-Oct', '28-Oct', '29-Oct', '1-Nov', '2-Nov', '3-Nov', '4-Nov', '5-Nov', '8-Nov', '9-Nov', '10-Nov', '11-Nov', '12-Nov', '15-Nov', '16-Nov', '17-Nov', '18-Nov', '19-Nov', '22-Nov', '23-Nov', '24-Nov', '26-Nov', '29-Nov', '30-Nov', '1-Dec', '2-Dec', '3-Dec', '6-Dec', '7-Dec', '8-Dec', '9-Dec', '10-Dec', '13-Dec', '14-Dec', '15-Dec', '16-Dec', '17-Dec', '20-Dec', '21-Dec', '22-Dec', '23-Dec', '27-Dec', '28-Dec', '29-Dec', '30-Dec', '31-Dec'
	]; 
	//change to contrast name

	d3.json("getDetails/HeatMapController/notf_amneg_2004_dates_20f",
	/* function(d) {
	 return {
	   row:   +d.fact_id,
	   col:   +d.row_id,
	   value: +d.value
	 };
	}, */
	function(error, data) {
		console.log(data[0].fact_id);
	 var colorScale = d3.scale.linear()
	     .domain([0,1000])
	     .range(['white','red']);
	 
	 var svg = d3.select("#chart").append("svg")
	     .attr("width", width + margin.left + margin.right)
	     .attr("height", height + margin.top + margin.bottom)
	     .append("g")
	     .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
	     ;
	 var rowSortOrder=false;
	 var colSortOrder=false;
	 var rowLabels = svg.append("g")
	     .selectAll(".rowLabelg")
	     .data(rowLabel)
	     .enter()
	     .append("text")
	     .text(function (d) { return d; })
	     .attr("x", 0)
	     .attr("y", function (d, i) { return hcrow.indexOf(i+1) * cellSize; })
	     .style("text-anchor", "end")
	     .attr("transform", "translate(-6," + cellSize / 1.5 + ")")
	     .attr("class", function (d,i) { return "rowLabel mono r"+i;} ) 
	     .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
	     .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})
	     .on("click", function(d,i) {rowSortOrder=!rowSortOrder; sortbylabel("r",i,rowSortOrder);d3.select("#order").property("selectedIndex", 4).node().focus();;})
	     ;

	 var colLabels = svg.append("g")
	     .selectAll(".colLabelg")
	     .data(colLabel)
	     .enter()
	     .append("text")
	     .text(function (d) { return d; })
	     .attr("x", 0)
	     .attr("y", function (d, i) { return hccol.indexOf(i+1) * cellSize; })
	     .style("text-anchor", "left")
	     .attr("transform", "translate("+cellSize/2 + ",-6) rotate (-90)")
	     .attr("class",  function (d,i) { return "colLabel mono c"+i;} )
	     .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
	     .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})
	     .on("click", function(d,i) {colSortOrder=!colSortOrder;  sortbylabel("c",i,colSortOrder);d3.select("#order").property("selectedIndex", 4).node().focus();;})
	     ;

	 var heatMap = svg.append("g").attr("class","g3")
	       .selectAll(".cellg")
	       .data(data,function(d){return d.fact_id+":"+d.row_id;})
	       .enter()
	       .append("rect")
	       .attr("x", function(d) { return hccol.indexOf(d.row_id) * cellSize; })
	       .attr("y", function(d) { return hcrow.indexOf(d.fact_id) * cellSize; })
	       .attr("class", function(d){return "cell cell-border cr"+(d.row-1)+" cc"+(d.col-1);})
	       .attr("width", cellSize)
	       .attr("height", cellSize)
	       .style("fill", function(d) { return colorScale(d.value); })
	       /* .on("click", function(d) {
	              var rowtext=d3.select(".r"+(d.row-1));
	              if(rowtext.classed("text-selected")==false){
	                  rowtext.classed("text-selected",true);
	              }else{
	                  rowtext.classed("text-selected",false);
	              }
	       })*/
	       .on("mouseover", function(d){
	              //highlight text
	              d3.select(this).classed("cell-hover",true);
	              d3.selectAll(".rowLabel").classed("text-highlight",function(r,ri){ return ri==(d.row-1);});
	              d3.selectAll(".colLabel").classed("text-highlight",function(c,ci){ return ci==(d.col-1);});
	       
	              //Update the tooltip position and value
	              d3.select("#tooltip")
	                .style("left", (d3.event.pageX+10) + "px")
	                .style("top", (d3.event.pageY+10) + "px")
	                .select("#value")
	                .html("Date :"+colLabel[d.col-1]+" and "+rowLabel[d.row-1]+"<br /> Value :"+d.value);  
	              //Show the tooltip
	              d3.select("#tooltip").classed("hidden", false);
	       })
	       .on("mouseout", function(){
	              d3.select(this).classed("cell-hover",false);
	              d3.selectAll(".rowLabel").classed("text-highlight",false);
	              d3.selectAll(".colLabel").classed("text-highlight",false);
	              d3.select("#tooltip").classed("hidden", true);
	       })
	       ;
	order('probecontrast');

	 /*var legend = svg.selectAll(".legend")
	     .data([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
	     .enter().append("g")
	     .attr("class", "legend");

	 legend.append("rect")
	   .attr("x", function(d, i) { return legendElementWidth * i; })
	   .attr("y", height+(cellSize*2))
	   .attr("width", legendElementWidth)
	   .attr("height", cellSize)
	   .style("fill", function(d, i) { return colors[i]; });

	 legend.append("text")
	   .attr("class", "mono")
	   .text(function(d) { return d; })
	   .attr("width", legendElementWidth)
	   .attr("x", function(d, i) { return legendElementWidth * i; })
	   .attr("y", height + (cellSize*4));*/

	//Change ordering of cells

	 function sortbylabel(rORc,i,sortOrder){
	      var t = svg.transition().duration(3000);
	      var log2r=[];
	      var sorted; // sorted is zero-based index
	      d3.selectAll(".c"+rORc+i) 
	        .filter(function(ce){
	           log2r.push(ce.value);
	         })
	      ;
	      if(rORc=="r"){ // sort log2ratio of a gene
	        sorted=d3.range(col_number).sort(function(a,b){ if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}});
	        t.selectAll(".cell")
	          .attr("x", function(d) { return sorted.indexOf(d.col-1) * cellSize; })
	          ;
	        t.selectAll(".colLabel")
	         .attr("y", function (d, i) { return sorted.indexOf(i) * cellSize; })
	        ;
	      }else{ // sort log2ratio of a contrast
	        sorted=d3.range(row_number).sort(function(a,b){if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}});
	        t.selectAll(".cell")
	          .attr("y", function(d) { return sorted.indexOf(d.row-1) * cellSize; })
	          ;
	        t.selectAll(".rowLabel")
	         .attr("y", function (d, i) { return sorted.indexOf(i) * cellSize; })
	        ;
	      }
	 }

	 d3.select("#order").on("change",function(){
	  
	   order(this.value);
	 });
	 
	 function order(value){
	  if(value=="hclust"){
	   var t = svg.transition().duration(3000);
	   t.selectAll(".cell")
	     .attr("x", function(d) { return hccol.indexOf(d.col) * cellSize; })
	     .attr("y", function(d) { return hcrow.indexOf(d.row) * cellSize; })
	     ;

	   t.selectAll(".rowLabel")
	     .attr("y", function (d, i) { return hcrow.indexOf(i+1) * cellSize; })
	     ;

	   t.selectAll(".colLabel")
	     .attr("y", function (d, i) { return hccol.indexOf(i+1) * cellSize; })
	     ;

	  }else if (value=="probecontrast"){
	   var t = svg.transition().duration(3000);
	   t.selectAll(".cell")
	     .attr("x", function(d) { return (d.col - 1) * cellSize; })
	     .attr("y", function(d) { return (d.row - 1) * cellSize; })
	     ;

	   t.selectAll(".rowLabel")
	     .attr("y", function (d, i) { return i * cellSize; })
	     ;

	   t.selectAll(".colLabel")
	     .attr("y", function (d, i) { return i * cellSize; })
	     ;

	  }else if (value=="probe"){
	   var t = svg.transition().duration(3000);
	   t.selectAll(".cell")
	     .attr("y", function(d) { return (d.row - 1) * cellSize; })
	     ;

	   t.selectAll(".rowLabel")
	     .attr("y", function (d, i) { return i * cellSize; })
	     ;
	  }else if (value=="contrast"){
	   var t = svg.transition().duration(3000);
	   t.selectAll(".cell")
	     .attr("x", function(d) { return (d.col - 1) * cellSize; })
	     ;
	   t.selectAll(".colLabel")
	     .attr("y", function (d, i) { return i * cellSize; })
	     ;
	  }
	 }
	 // 
	 var sa=d3.select(".g3")
	     .on("mousedown", function() {
	         if( !d3.event.altKey) {
	            d3.selectAll(".cell-selected").classed("cell-selected",false);
	            d3.selectAll(".rowLabel").classed("text-selected",false);
	            d3.selectAll(".colLabel").classed("text-selected",false);
	         }
	        var p = d3.mouse(this);
	        sa.append("rect")
	        .attr({
	            rx      : 0,
	            ry      : 0,
	            class   : "selection",
	            x       : p[0],
	            y       : p[1],
	            width   : 1,
	            height  : 1
	        })
	     })
	     .on("mousemove", function() {
	        var s = sa.select("rect.selection");
	     
	        if(!s.empty()) {
	            var p = d3.mouse(this),
	                d = {
	                    x       : parseInt(s.attr("x"), 10),
	                    y       : parseInt(s.attr("y"), 10),
	                    width   : parseInt(s.attr("width"), 10),
	                    height  : parseInt(s.attr("height"), 10)
	                },
	                move = {
	                    x : p[0] - d.x,
	                    y : p[1] - d.y
	                }
	            ;
	     
	            if(move.x < 1 || (move.x*2<d.width)) {
	                d.x = p[0];
	                d.width -= move.x;
	            } else {
	                d.width = move.x;       
	            }
	     
	            if(move.y < 1 || (move.y*2<d.height)) {
	                d.y = p[1];
	                d.height -= move.y;
	            } else {
	                d.height = move.y;       
	            }
	            s.attr(d);
	     
	                // deselect all temporary selected state objects
	            d3.selectAll('.cell-selection.cell-selected').classed("cell-selected", false);
	            d3.selectAll(".text-selection.text-selected").classed("text-selected",false);

	            d3.selectAll('.cell').filter(function(cell_d, i) {
	                if(
	                    !d3.select(this).classed("cell-selected") && 
	                        // inner circle inside selection frame
	                    (this.x.baseVal.value)+cellSize >= d.x && (this.x.baseVal.value)<=d.x+d.width && 
	                    (this.y.baseVal.value)+cellSize >= d.y && (this.y.baseVal.value)<=d.y+d.height
	                ) {
	     
	                    d3.select(this)
	                    .classed("cell-selection", true)
	                    .classed("cell-selected", true);

	                    d3.select(".r"+(cell_d.row-1))
	                    .classed("text-selection",true)
	                    .classed("text-selected",true);

	                    d3.select(".c"+(cell_d.col-1))
	                    .classed("text-selection",true)
	                    .classed("text-selected",true);
	                }
	            });
	        }
	     })
	     .on("mouseup", function() {
	           // remove selection frame
	        sa.selectAll("rect.selection").remove();
	     
	            // remove temporary selection marker class
	        d3.selectAll('.cell-selection').classed("cell-selection", false);
	        d3.selectAll(".text-selection").classed("text-selection",false);
	     })
	     .on("mouseout", function() {
	        if(d3.event.relatedTarget.tagName=='html') {
	                // remove selection frame
	            sa.selectAll("rect.selection").remove();
	                // remove temporary selection marker class
	            d3.selectAll('.cell-selection').classed("cell-selection", false);
	            d3.selectAll(".rowLabel").classed("text-selected",false);
	            d3.selectAll(".colLabel").classed("text-selected",false);
	        }
	     })
	     ;
	});
}
