const style = {
 
 commentBox: {
   width: '80vw',
   margin:'0 auto',
   fontFamily:'Arial, sans-serif'
 },

 title: {
   textAlign:'center',
   textTransform:'uppercase',
   color: 'black',
   fontFamily:'Courier, sans-serif'
   },

  commentList: {
   border:'3px solid black',
   padding:'0 12px',
   maxHeight:'70vh',
   borderRadius:'3px',
   overflow:'scroll'
 },

 comment: {
   backgroundColor:'#D3D3D3',
   margin:'10px',
   padding:'3px 10px',
   fontSize:'.85rem',
   borderRadius:'3px'
 },

 commentForm: {
   margin:'10px',
   display:'flex',
   flexFlow:'row wrap',
   justifyContent:'space-between'
 },

 commentFormAuthor: {
   minWidth:'150px',
   margin:'3px',
   padding:'0 10px',
   borderRadius:'3px',
   height:'40px',
   flex:'2'
 },

 commentFormText: {
   flex:'4',
   minWidth:'400px',
   margin:'3px',
   padding:'0 10px',
   height:'40px',
   borderRadius:'3px'
 },

 commentFormPost: {
   minWidth:'75px',
   flex:'1',
   height:'40px',
   margin:'5px 3px',
   fontSize:'1rem',
   backgroundColor:'#FFC125',
   borderRadius:'3px',
   color:'#fff',
   textTransform:'uppercase',
   letterSpacing:'.055rem',
   border:'none'
 },

 updateLink: {
   textDecoration:'none',
   paddingRight:'15px',
   fontSize:'.7rem'
 },

 deleteLink: {
   textDecoration:'none',
   paddingRight:'15px',
   fontSize:'.7rem',
   color:'red'
 }
}

module.exports = style;