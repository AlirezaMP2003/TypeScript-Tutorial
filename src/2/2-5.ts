// Enums
// 1_ Numeric Enums:
enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
console.log(StatusCode.Success); // 200
console.log(StatusCode["NotFound"]); // 404
console.log(StatusCode[500]); // "ServerError"


// 2_ String Enums:
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let role: UserRole = UserRole.Admin;
console.log(role); // ADMIN


// 3_ Heterogeneous Enums:
enum MixedEnum {
    Yes = "YES",
    No = 0,
    Maybe = 1
}

console.log(MixedEnum.Yes); // YES
console.log(MixedEnum.No); // 0




// ts-node src/2/2-5.ts