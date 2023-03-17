

//  const authMiddeware= app.get('/accessResource', (req, res,next)=>{
// 	const token = req.headers.authorization.split(' ')[1];
// 	//Authorization: 'Bearer TOKEN'
// 	if(!token)
// 	{
// 		res.status(200).json({success:false, message: "Error!
// 					Token was not provided."});
// 	}
// 	//Decoding the token
// 	const decodedToken = jwt.verify(token,process.env.JWT_JWT_key);
// 	res.status(200).json({success:true, data:{userId:decodedToken.userId,
// 	email:decodedToken.email});
//     next()
// });

// module.exports=authMiddeware;