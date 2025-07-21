//First comment. // ❌ `spaced-comment`

/*Second comment. */ // ❌ `spaced-comment`
/* Third comment.*/ // ❌ block:balanced:true of `spaced-comment`

// ✅ line:exceptions:['/', '-', '=', '+'] `spaced-comment`
//////

// ✅ line:exceptions:['/', '-', '=', '+'] `spaced-comment`
//----

// ✅ line:exceptions:['/', '-', '=', '+'] `spaced-comment`
//====

// ✅ line:exceptions:['/', '-', '=', '+'] `spaced-comment`
//++++

// ❌ line:exceptions:['/', '-', '=', '+'] `spaced-comment`
//****

// ❌ line:exceptions:['/', '-', '=', '+'] `spaced-comment`
//????

/******/ // ✅ block:exceptions:['*'] of `spaced-comment`
/*----*/ // ❌ `spaced-comment`
/*////*/ // ❌ `spaced-comment`
