"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserInterceptor = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
let GetUserInterceptor = class GetUserInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(context, handler) {
        const request = context.switchToHttp().getRequest();
        const { userId } = request.session || {};
        if (userId) {
            const user = this.userService.findOne(userId);
            request.user = user;
        }
        return handler.handle();
    }
};
exports.GetUserInterceptor = GetUserInterceptor;
exports.GetUserInterceptor = GetUserInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], GetUserInterceptor);
//# sourceMappingURL=get-user.interceptor.js.map