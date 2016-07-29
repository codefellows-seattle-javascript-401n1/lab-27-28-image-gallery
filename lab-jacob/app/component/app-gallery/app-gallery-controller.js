'use strict';

const angular = require('angular');

angular.module('imageGallery').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){
  this.thumb = true;
  this.full = false;
  this.galleryItem = {
    title: '',
    desc: '',
    thumbSrc: '',
    imgSrc: '',
    link: ''
  };

  this.showFull = function(){
    if (this.thumb === true) this.thumb = false;
    if (this.full === false) this.full = true;
  };

  this.showThumb = function(){
    if (this.thumb === false) this.thumb = true;
    if (this.full === true) this.full = false;
  };

  this.images = [
    {
      title:' Fractal Image 1',
      desc: 'Cool perspective image with icy blueness and straight geometric shapes',
      thumbSrc: require('../../asset/image/Fractal-Thumbnail0.jpg'),
      imgSrc: require('../../asset/image/Fractal-Full0.jpg'),
      link: 'https://www.flickr.com/photos/tommietheturtle1/16970363600/in/photolist-rRBxRS-hUkYwy-owXpcD-qm6gnP-qAecCy-aHJ9WR-cJsHZd-rcGwic-rQ4Y46-rSdrcC-ekEFVA-rcZXER-qo1T2q-ocTNQZ-rcUaXi-qkWKH6-owiFQy-otsMWe-qkNkZG-s9erC2-qSCErv-qUYqKk-rS3Ryz-nHt4xg-odY5UN-rRWCqx-rpBhrR-rdz3Yb-ove8oL-9ZgQ5b-dgLW7V-ounchW-odbDQE-saxE58-i7Zkbc-owiSB5-o5ay1Z-qjjr6D-od9jsA-dJHumU-qzsqoW-ouWKd6-owrJxp-oeUDqJ-s9t73T-s7hLrA-otUYUp-pSfpzN-rcLx9H-s9EyzZ'
    },
    {
      title: 'Fractal Image 2',
      desc: 'Repeating rainbow negative image',
      thumbSrc: require('../../asset/image/Fractal-Thumbnail1.jpg'),
      imgSrc: require('../../asset/image/Fractal-Full1.jpg'),
      link: 'https://www.flickr.com/photos/tommietheturtle1/17140313646/in/photolist-s7CA65-ouzdZ9-w2aiPj-qb1fwW-x2FtCj-ovv2j7-od5ECV-odYAqx-oeUDoj-gtmhGS-otEqFv-ovJ8gx-oeUHVn-emppon-oeZ31n-oeYnoy-ocAxJZ-oeTurF-odKkKC-xG7Djx-9gD6iz-oyftKr-ox5hCx-odmxvq-owvUvc-oeQMsG-odJwF4-qC5PDo-qMm6hm-ousMrG-ou5bMz-odaqjz-odertv-pUbGZi-mRx6gD-ouSuyV-xewTnP-ouTmnn-bdiyhc-rvKpCn-9q9RQX-ouqem1-osAXhE-qkUBpe-qrXybf-owaCAf-os7mHq-qEyTgf-od9xrG-odcugD'
    },
    {
      title: 'Fractal Image 3',
      desc: 'Super sweet dark box shapes a la tetris',
      thumbSrc: require('../../asset/image/Fractal-Thumbnail2.jpg'),
      imgSrc: require('../../asset/image/Fractal-Full2.jpg'),
      link: 'https://www.flickr.com/photos/tommietheturtle1/14280363550/in/photolist-nKUAyE-rRVqKQ-odFxef-odmzEA-qkLg8R-rPLPdz-rdCrkQ-rcy2sH-dLTqtf-ou7SdR-s9aDGR-pFjV83-8xQE8E-oeYTWt-s7fwZ9-rdtxDu-ioamQL-ounS97-rd2cwX-odaegk-t9o8Ee-oCVJXy-osWT6d-8Bn3J7-otJeN3-ocafHL-oyaMxF-ouyPCZ-odE6oQ-owt8PH-dZvkaZ-hUxecV-owgLg3-quz2GL-qkXBAU-orzSKG-ouqqru-fAzfj7-ocvvtZ-rRBxRS-hUkYwy-owXpcD-qm6gnP-qAecCy-aHJ9WR-cJsHZd-rcGwic-rQ4Y46-rSdrcC-ekEFVA'
    },
    {
      title: 'Fractal Image 4',
      desc: 'A fan of warm blue and red lights',
      thumbSrc: require('../../asset/image/Fractal-Thumbnail3.jpg'),
      imgSrc: require('../../asset/image/Fractal-Full3.jpg'),
      link: 'https://www.flickr.com/photos/tommietheturtle1/16676069701/in/photolist-rpBdx8-ioae1j-oe2n1D-odmmCA-ovrhgu-inXEkF-dLTzQU-s9xLhK-qEwdUr-i4df75-ou12in-spP2VH-rT8BFD-s8gQ6f-nKUAyE-rRVqKQ-odFxef-odmzEA-qkLg8R-rPLPdz-rdCrkQ-rcy2sH-dLTqtf-ou7SdR-s9aDGR-pFjV83-8xQE8E-oeYTWt-s7fwZ9-rdtxDu-ioamQL-ounS97-rd2cwX-odaegk-t9o8Ee-oCVJXy-osWT6d-8Bn3J7-otJeN3-ocafHL-oyaMxF-ouyPCZ-odE6oQ-owt8PH-dZvkaZ-hUxecV-owgLg3-quz2GL-qkXBAU-orzSKG'
    },
    {
      title: 'Fractal Image 5',
      desc: 'Dark blue and pink meet with liquid distortion',
      thumbSrc: require('../../asset/image/Fractal-Thumbnail4.jpg'),
      imgSrc: require('../../asset/image/Fractal-Full4.jpg'),
      link: 'https://www.flickr.com/photos/tommietheturtle1/16542090373/in/photolist-rcLx9H-s9EyzZ-owvDua-rKsSan-kahr5g-7bExRm-rQckHV-o9pXo4-bdhFTZ-qkL6Vw-s96W7r-qUTMvq-s7JyQ7-ocVULw-rRvYL1-odbkun-ow8mWF-s8XHKW-rdC8Jh-eEXuzQ-rdBkJb-t2mB7b-odvWzn-oy7SQv-of1tr2-of1wrv-ouZwuV-rg3F1j-ocJFSr-oeYU4n-qEDj99-o8AVxV-qCjpyb-oydkgg-dLMRba-otuVJq-rcCaSS-oeRvYL-ouswvC-ouYMdz-otUv4K-ou5bbw-qYyi7U-rmyHLs-otZ21v-oupHgo-qAExpL-dZB1fq-qkRo2E-poL5m9'
    },
    {
      title: 'Fractal Image 6',
      desc: 'Here\'s the sixth fractal image',
      thumbSrc: require('../../asset/image/Fractal-Thumbnail5.jpg'),
      imgSrc: require('../../asset/image/Fractal-Full5.jpg'),
      link: 'https://www.flickr.com/photos/tommietheturtle1/16676082851/in/photolist-rpBhrR-rdz3Yb-ove8oL-9ZgQ5b-dgLW7V-ounchW-odbDQE-saxE58-i7Zkbc-owiSB5-o5ay1Z-qjjr6D-od9jsA-dJHumU-qzsqoW-ouWKd6-owrJxp-oeUDqJ-s9t73T-s7hLrA-otUYUp-pSfpzN-rcLx9H-s9EyzZ-owvDua-rKsSan-kahr5g-7bExRm-rQckHV-o9pXo4-bdhFTZ-qkL6Vw-s96W7r-qUTMvq-s7JyQ7-ocVULw-rRvYL1-odbkun-ow8mWF-s8XHKW-rdC8Jh-eEXuzQ-rdBkJb-t2mB7b-odvWzn-oy7SQv-of1tr2-of1wrv-ouZwuV-rg3F1j'
    }
  ];
}
