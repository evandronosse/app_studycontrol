
class InternalServerError extends Error { //erro do servidor utilizado na resposta no controler
    constructor(message, stack) {
        super(`Erro interno da aplicação!: ${message}`);
        this.stack = stack
        this.name = 'InternalServerError';
        this.errorId = 0
        this.status = 500
    }
}

class DataNotFound extends Error {
    constructor(name) {
        super(`${name} não foi encontrado!`)
        this.name = 'DataNotFound'
        this.errorId = 1
        this.status = 404
    }
}

class ExistingData extends Error {
    constructor(name) {
        super(`${name} já existe!`)
        this.name = 'ExistingData'
        this.errorId = 2
        this.status = 406
    }
}

class InvalidField extends Error {
    constructor(field) {
        super(`É necessário preencher o campo ${field}!`)
        this.name = 'InvalidField'
        this.errorId = 3
        this.status = 400
    }
}

class dataNotProvided extends Error {
    constructor(name) {
        super(`Não foram fornecidos dados para atualizar o ${name}! ou os dados fornecidos são os mesmos`)
        this.name = 'dataNotProvided'
        this.errorId = 4
        this.status = 400
    }
}

class ValueNotSupported extends Error {
    constructor(contentType) {
        super(`O tipo de conteúdo ${contentType} não é suportado`)
        this.name = 'ValueNotSupported'
        this.errorId = 5
        this.status = 406
    }
}

class MinimumFieldValue extends Error {
    constructor(name, minimum) {
        super(`O campo ${name} precisa ser maior que ${minimum} caracteres!`)
        this.name = 'MinimumFieldValue'
        this.errorId = 6
        this.status = 406
    }
}

class MaximumFieldValue extends Error {
    constructor(name, maximum) {
        super(`O campo ${name} precisa ser menor que ${maximum} caracteres!`)
        this.name = 'MaximumFieldValue'
        this.errorId = 7
        this.status = 406
    }
}

class IncorrectUsernameOrPassword extends Error {
    constructor() {
        super(`Usuário ou senha inválidos!`)
        this.name = 'IncorrectUsernameOrPassword'
        this.errorId = 8
        this.status = 400
    }
}

class LogIn extends Error {
    constructor() {
        super(`Acesso negado! Efetue o Login`)
        this.name = 'LogIn'
        this.errorId = 9
        this.status = 401
    }
}

class LoggedInUser extends Error {
    constructor() {
        super(`Usuário ja está acessando!`)
        this.name = 'LoggedInUser'
        this.errorId = 10
        this.status = 401
    }
}

class IvalidData extends Error {
    constructor(name) {
        super(`${name} é inválido!`)
        this.name = 'IvalidData'
        this.errorId = 11
        this.status = 400
    }
}

class DataNotSend extends Error {
    constructor(name) {
        super(`${name} não enviado!`)
        this.name = 'DataNotSend'
        this.errorId = 12
        this.status = 400
    }
}

class InvalidCookie extends Error {
    constructor(name) {
        super(`${name} inválido!`)
        this.name = 'InvalidCookie'
        this.errorId = 16
        this.status = 401
    }
}

class ExpiredSession extends Error {
    constructor() {
        super(`Sessão expirada!`)
        this.name = 'ExpiredSession'
        this.errorId = 17
        this.status = 401
    }
}

export default {
    InternalServerError: InternalServerError,
    DataNotFound: DataNotFound,
    ExistingData: ExistingData,
    InvalidField: InvalidField,
    dataNotProvided: dataNotProvided,
    ValueNotSupported: ValueNotSupported,
    MinimumFieldValue: MinimumFieldValue,
    MaximumFieldValue: MaximumFieldValue,
    IncorrectUsernameOrPassword: IncorrectUsernameOrPassword,
    LogIn: LogIn,
    LoggedInUser: LoggedInUser,
    IvalidData: IvalidData,
    DataNotSend: DataNotSend,
    InvalidCookie: InvalidCookie,
    ExpiredSession: ExpiredSession
};