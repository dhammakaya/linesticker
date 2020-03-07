const axios = require('axios');
const fs = require('fs');
const path = require('path');

const getSourceSticker = (stickerUrl) => {
  return axios.get(stickerUrl)
  .then(function (response) {
    // handle success
    // console.log(response);
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}


const generateSticker = (stickerData) => {
  var SourceHtml1 = stickerData;
  var SourceHtml = "";
  if (SourceHtml1 == "") {
    console.log('No Url or Invalid Url');
  } else {
    var SourceHtml = SourceHtml1.replace(/\<\/li\>/gm, 'ฅ|ฃ');
    var aRetArray = SourceHtml.split("ฅ|ฃ");
    var UniqueId1 = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/';
    var lengthUniqueId1 = UniqueId1.length;
    var UniqueId2 = '';
    var UniqueId3 = '/android/sticker.png';
    var lengthUniqueId3 = UniqueId3.length;
    var sidsticker, sPrefix, sImgSticker, sInputSticker, sButtonSticker, sSuffix;



    var SourceHtmlHead = '<!DOCTYPE html><html><head>' +
      '<meta charset="utf-8"><meta name="viewport"content="width=device-width, initial-scale=1.0"><title>Find Sticker ID</title><link crossorigin="anonymous"href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"rel="stylesheet"/><link crossorigin="anonymous"href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"rel="stylesheet"/><link href="https://fonts.googleapis.com/css?family=Trirong"rel="stylesheet"/><link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"rel="stylesheet"/><style>html{font-size:18px;}table{width:100%;table-layout:fixed;word-break:break-all;color:blue;}.div{max-width:100%;text-align:center;}</style>' +
      '</head>';
    var SourceHtmlBody1 = '';
    var SourceHtmlBody2 = '';
    for (var i = 0; i < aRetArray.length; i++) {
      if (aRetArray[i].indexOf(UniqueId1) != -1) {
        var position2 = aRetArray[i].lastIndexOf(UniqueId3);
        var position1 = aRetArray[i].lastIndexOf(UniqueId1, position2 - 1) + lengthUniqueId1;
        var position3 = position2 - position1;
        sidsticker = aRetArray[i].substr(position1, position3);
        if (sidsticker != "") {
          sPrefix = '<tr>';
          sImgSticker = '<td><img src="' + 'https://stickershop.line-scdn.net/stickershop/v1/sticker/' + sidsticker + '/android/sticker.png"/></td>';
          sInputSticker = '<td><input id="' + 'sidstck' + i + '" ' + 'value="line://app/1613121112-l2N56WgJ?sType=sticker&sid=' + sidsticker + '"/></td>';
          sButtonSticker = '<td><div id="bCopy' + i + '" ' + 'class="' + 'btn btn-success"' + ' onclick=' + '"' + 'CopyLinkApps(' + "'" + 'sidstck' + i + "'" + ')"' + '>Copy</div></td>';
          sSuffix = '</tr>';
          SourceHtmlBody2 = SourceHtmlBody2 + sPrefix + sImgSticker + sInputSticker + sButtonSticker + sSuffix;
        }
      }
    };
    var SourceHtmlFooter = '</table>' +
      '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>' +
      '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>' +
      '<script type="text/javascript">function CopyLinkApps(bCopy){var clipTextout=document.getElementById(bCopy);clipTextout.select();document.execCommand("copy");window.alert(clipTextout.value);}</script>' +
      '</body></html>';
    if (SourceHtmlBody2 == "") {
      SourceHtmlBody1 = '';
      SourceHtmlBody2 = '<h2 style="color:blue;">No Sticker Line in Url</h2>';
    } else {
      SourceHtmlBody1 = '<table class="table-responsive table-bordered table-hover table-condensed"><th>Sticker Image</th><th>Big Sticker</th><th></th>';
    }
    var oSourceHtml = SourceHtmlHead + SourceHtmlBody1 + SourceHtmlBody2 + SourceHtmlFooter;
    return oSourceHtml;

    // updateFlie_HTML(oSourceHtml);
  }
};

const saveSourceHtml = (oSourceHtml) => {
  const saved = fs.writeFileSync(path.join(__dirname, '../../runtime', 'viewsource.html'), oSourceHtml);
  console.log('file saved? : ', saved)
};

module.exports = {
  generateSticker,
  saveSourceHtml,
  getSourceSticker
};
