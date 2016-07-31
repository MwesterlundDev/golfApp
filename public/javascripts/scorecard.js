
'use strict'

/*
 *	Scorecard
 */

gapp.scorecard = (function() {
    var debug = true;

    // private variables
    var email, outing, course;

    // private methods
    var loadHole;

    loadHole = function(obj) {
        if (debug) {
            console.log('loading scorecard', obj.data);
        }
        
        var contentDiv = d3.select('#content');
        contentDiv.selectAll("*").remove();
/*
         // YARDAGE 10 PERCENT
        var holeInfo = contentDiv.append('div')
            .classed('row row-20', true)
            .attr('id', 'hole-info');
        
        yardage.append('div')
            .classed('row row-50 header-footer-label block-of-text', true)
            .append('div').text('Yardages');
        var yardageRow = yardage.append('div')
            .classed('row row-50', true);
        yardageRow.append('div')
            .classed('col col-25 yardage-red block-of-text', true)
            .append('div').text(180);
        yardageRow.append('div')
            .classed('col col-25 yardage-blue block-of-text', true)
            .append('div').text(260);
        yardageRow.append('div')
            .classed('col col-25 yardage-whit block-of-text', true)
            .append('div').text(290);
        yardageRow.append('div')
            .classed('col col-25 yardage-black block-of-text', true)
            .append('div').text(320);
*/
        // YARDAGE 10 PERCENT
        var yardage = contentDiv.append('div')
            .classed('row row-10 center-text', true);
        
        yardage.append('div')
            .classed('row row-50 header-footer-label block-of-text', true)
            .append('div').text('Yardages');
        var yardageRow = yardage.append('div')
            .classed('row row-50', true);
        yardageRow.append('div')
            .classed('col col-25 yardage-red block-of-text', true)
            .append('div').text(180);
        yardageRow.append('div')
            .classed('col col-25 yardage-blue block-of-text', true)
            .append('div').text(260);
        yardageRow.append('div')
            .classed('col col-25 yardage-whit block-of-text', true)
            .append('div').text(290);
        yardageRow.append('div')
            .classed('col col-25 yardage-black block-of-text', true)
            .append('div').text(320);

        
        

    };

    return {
        init : function() {
            gapp.events.register(gapp.events.LOAD_SCORECARD, loadHole);
        }
    }   
}());
