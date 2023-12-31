"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNameEsp32Controller = void 0;
class GetNameEsp32Controller {
    constructor(getNameEsp32UseCase) {
        this.getNameEsp32UseCase = getNameEsp32UseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.getNameEsp32UseCase.run();
                console.log('hola');
                console.log(products);
                if (products)
                    res.status(200).send(products.map((product) => {
                        return {
                            id: product.id,
                            name_esp32: product.id_esp32,
                            id_user: product.id_user,
                            hora: product.hora,
                            fecha: product.fecha,
                            humedad: product.humedad,
                            temperatura: product.temperatura
                        };
                    }));
                else
                    res.status(400).send({
                        status: "error",
                        msn: "Ocurrio algún problema",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.GetNameEsp32Controller = GetNameEsp32Controller;
