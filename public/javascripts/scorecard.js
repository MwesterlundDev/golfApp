
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
        contentDiv.select('#hole-info').remove();

         // YARDAGE HOLE INFO 20 PERCENT
        var holeInfo = contentDiv.append('div')
            .classed('row row-20', true)
            .attr('id', 'hole-info');
        
        var holeNav = holeInfo.append('div')
            .classed('row row-50 center-text', true)
        holeNav.append('div')
            .classed('col col-25 block-of-text', true)
            .append('div').text('Prev');
        holeNav.append('div')
            .classed('col col-25 block-of-text', true)
            .append('div').text('Hole 1');
        holeNav.append('div')
            .classed('col col-25 block-of-text', true)
            .append('div').text('Par 4');
        holeNav.append('div')
            .classed('col col-25 block-of-text', true)
            .append('div').text('Next');

        var yardage = holeInfo.append('div')
            .classed('row row-50 center-text', true)
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

        // PLAYER INFO 70 PERCENT
        var scorecardInfo = contentDiv.append('div')
            .classed('row row-70', true)
            .attr('id', 'scorecard-info');

        var scorecardHeader = scorecardInfo.append('div')
            .classed('row row-10 header-footer-label center-text padding-left-5', true)
        scorecardHeader.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('Logo');
        scorecardHeader.append('div')
            .classed('col col-35 block-of-text', true)
            .append('div').text('Player');
        scorecardHeader.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('Score');
        scorecardHeader.append('div')
            .classed('col col-30 block-of-text', true)
            .append('div').text('Plus/Minus');

        var playerInfo = scorecardInfo.append('div')
            .classed('row row-20 center-text', true)
         playerInfo.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('Logo');
        playerInfo.append('div')
            .classed('col col-35 block-of-text', true)
            .append('div')
            .classed('ellipsis', true)
            .text('Brian Mendicino');
        playerInfo.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('4');
        var plusMinus = playerInfo.append('div')
            .classed('col col-30 block-of-text', true)
            .append('div');
        plusMinus.append('img')
            .attr('id', 'minus-sign')
            .attr('src', 'images/minus.png');
        plusMinus.append('img')
            .attr('id', 'plus-sign')
            .attr('src', 'images/add.png');
        
        playerInfo = scorecardInfo.append('div')
            .classed('row row-20 center-text', true)
         playerInfo.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('Logo');
        playerInfo.append('div')
            .classed('col col-35 block-of-text', true)
            .append('div')
            .classed('ellipsis', true)
            .text('Brian Mendicino');
        playerInfo.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('4');
        plusMinus = playerInfo.append('div')
            .classed('col col-30 block-of-text', true)
            .append('div');
        plusMinus.append('img')
            .attr('id', 'minus-sign')
            .attr('src', 'images/minus.png');
        plusMinus.append('img')
            .attr('id', 'plus-sign')
            .attr('src', 'images/add.png');
        
        playerInfo = scorecardInfo.append('div')
            .classed('row row-20 center-text', true)
         playerInfo.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('Logo');
        playerInfo.append('div')
            .classed('col col-35 block-of-text', true)
            .append('div')
            .classed('ellipsis', true)
            .text('Brian Mendicino');
        playerInfo.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('4');
        plusMinus = playerInfo.append('div')
            .classed('col col-30 block-of-text', true)
            .append('div');
        plusMinus.append('img')
            .attr('id', 'minus-sign')
            .attr('src', 'images/minus.png');
        plusMinus.append('img')
            .attr('id', 'plus-sign')
            .attr('src', 'images/add.png');
        
        playerInfo = scorecardInfo.append('div')
            .classed('row row-20 center-text', true)
         playerInfo.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('Logo');
        playerInfo.append('div')
            .classed('col col-35 block-of-text', true)
            .append('div')
            .classed('ellipsis', true)
            .text('Brian Mendicino');
        playerInfo.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('4');
        plusMinus = playerInfo.append('div')
            .classed('col col-30 block-of-text', true)
            .append('div');
        plusMinus.append('img')
            .attr('id', 'minus-sign')
            .attr('src', 'images/minus.png');
        plusMinus.append('img')
            .attr('id', 'plus-sign')
            .attr('src', 'images/add.png');
        
        // HANDICAP INFO 10 PERCENT
        var handicapInfo = contentDiv.append('div')
	        .classed('row row-10', true)
            .attr('id', 'handicap-info');
        
        handicapInfo.append('div')
            .classed('row row-50 header-footer-label center-text block-of-text', true)
            .append('div').text('Handicaps');
        
        var handicapScores = handicapInfo.append('div')
            .classed('row row-50 center-text', true)
         handicapScores.append('div')
            .classed('col col-25 yardage-red block-of-text', true)
            .append('div').text('14');
         handicapScores.append('div')
            .classed('col col-25 yardage-blue block-of-text', true)
            .append('div').text('14');
         handicapScores.append('div')
            .classed('col col-25 yardage-white block-of-text', true)
            .append('div').text('13');
         handicapScores.append('div')
            .classed('col col-25 yardage-black block-of-text', true)
            .append('div').text('14');
    };

    return {
        init : function() {
            gapp.events.register(gapp.events.LOAD_SCORECARD, loadHole);
        }
    }   
}());
