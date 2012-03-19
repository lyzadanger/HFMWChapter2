var breakpoint = 481,
  id = 'mapcontainer',
  viewportWidth = window.innerWidth;
if (viewportWidth > breakpoint) {
  var mapElement = document.createElement('iframe'),
      mapLink = document.getElementById('maplink');
  mapElement.id = 'map';
  mapElement.width = '300';
  mapElement.height = '300';
  mapElement.frameborder = '0';
  mapElement.scrolling = 'no';
  mapElement.marginheight = '0';
  mapElement.marginwidth = '0';
  mapElement.src = 'http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=334+NW+11th+Ave,+Portland,+OR+97209&aq=&sll=37.0625,-95.677068&sspn=58.164117,80.332031&vpsrc=0&ie=UTF8&hq=&hnear=334+NW+11th+Ave,+Portland,+Oregon+97209&t=m&ll=45.525472,-122.68218&spn=0.01804,0.025749&z=14&output=embed';
  document.getElementById(id).insertBefore(mapElement,mapLink);
}
