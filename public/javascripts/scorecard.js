
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
        const data = obj.data;
        
        var contentDiv = d3.select('#content');
        contentDiv.select('#hole-info').remove();

         // YARDAGE HOLE INFO 20 PERCENT
        var holeInfo = contentDiv.append('div')
            .classed('row row-20', true)
            .attr('id', 'hole-info');
        
        var holeNav = holeInfo.append('div')
            .classed('row row-50 center-text', true)
        holeNav.append('div')
            .classed('col col-33 block-of-text', true)
            .append('div').text('Prev');
        holeNav.append('div')
            .classed('col col-33 block-of-text', true)
            .append('div').text('Hole ' + data.hole.number);
        holeNav.append('div')
            .classed('col col-33 block-of-text', true)
            .append('div').text('Next');

        var yardage = holeInfo.append('div')
            .classed('row row-50 center-text', true)
        yardage.append('div')
            .classed('row row-50 header-footer-label block-of-text', true)
            .append('div').text('Yardages');

        var yardageRow = yardage.append('div')
            .classed('row row-50', true)
            .attr('id', 'yardage-info');

        // Yardage scorecard data
        var yardageCol = yardageRow.selectAll('.col').data(obj.data.hole.tees);

        yardageCol.enter().append('div')
            .attr('class', function(d) { return 'col col-25 block-of-text yardage-'+ d.color; })
            .append('div').text(function(d) { return d.yardage; });

        // PLAYER INFO 70 PERCENT
        var scorecardInfo = contentDiv.append('div')
            .classed('row row-70', true)
            .attr('id', 'scorecard-info');

        var scorecardHeader = scorecardInfo.append('div')
            .classed('row row-10 header-footer-label center-text', true)
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
        
        // PLayer scorecard data
        var playerInfo = scorecardInfo.selectAll('.row.row-20.center-text').data(obj.data.hole.group);

        var payerInfoRow = playerInfo.enter().append('div')
            .classed('row row-20 center-text', true)
        payerInfoRow.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text('Logo');
        payerInfoRow.append('div')
            .attr('class', function(d) { return 'col col-35 block-of-text yardage-' + d.color; })
            .append('div')
            .classed('ellipsis', true)
            .text(function(d) { return d.user });
        payerInfoRow.append('div')
            .classed('col col-15 block-of-text', true)
            .append('div').text(function(d) { return d.par });
        var plusMinus = payerInfoRow.append('div')
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

        // Handicap scorecard data
        var handicapCol = handicapScores.selectAll('.col').data(obj.data.hole.tees);

         handicapCol.enter().append('div')
            .attr('class', function(d) { return 'col col-25 block-of-text yardage-'+ d.color; })
            .append('div').text(function(d) { return d.handicap; });
    };

    return {
        init : function() {
            gapp.events.register(gapp.events.LOAD_SCORECARD, loadHole);
        }
    }   
}());
