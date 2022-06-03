export default function Service() {
   return (
     <div className="service">
       <h2>예배안내</h2>
       <ul>
         <li>장소: 329 Dorcas St, South Melbourne VIC 3205</li>
         <li>문의: 0405 796 095</li>
         <li>1부 예배: 주일 12.15pm</li>
         <li>2부 예배: 주일 1.30pm</li>
         <li>어린이 예배: 주일 1.30pm</li>
         <li>수요 기도회(Zoom): 수요일 7pm</li>
       </ul>
       <iframe
         title="map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.1018472943415!2d144.9541245153979!3d-37.83450147974859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667fc1a001597%3A0xbd3ad923f7033781!2s329%20Dorcas%20St%2C%20South%20Melbourne%20VIC%203205!5e0!3m2!1sen!2sau!4v1654230125809!5m2!1sen!2sau"
         width="800"
         height="600"
         style={{ border: '0' }}
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
       ></iframe>
     </div>
   );
}