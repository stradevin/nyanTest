"openapi": "3.0.1",
    "info": {
    "title": "BotKnowledge-Panel",
        "version": "1.0.0"
},
"paths": {
    "/api/v{version}/Auth/token": {
        "post": {
            "tags": [
                "Auth"
            ],
                "parameters": [
                    {
                        "name": "username",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "password",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                }
            }
        }
    },
    "/api/v{version}/Auth/user": {
        "post": {
            "tags": [
                "Auth"
            ],
                "parameters": [
                    {
                        "name": "username",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "password",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        }
    },
    "/api/v{version}/Roles/roles": {
        "get": {
            "tags": [
                "Roles"
            ],
                "parameters": [
                    {
                        "name": "username",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        },
        "put": {
            "tags": [
                "Roles"
            ],
                "parameters": [
                    {
                        "name": "login",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "role",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        }
    },
    "/api/v{version}/Roles/availiableroles": {
        "get": {
            "tags": [
                "Roles"
            ],
                "parameters": [
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        }
    },
    "/api/v{version}/Roles/admin": {
        "put": {
            "tags": [
                "Roles"
            ],
                "parameters": [
                    {
                        "name": "login",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        }
    },
    "/api/v{version}/Service/fields": {
        "get": {
            "tags": [
                "Service"
            ],
                "parameters": [
                    {
                        "name": "serviceName",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        }
    },
    "/api/v{version}/Service/data": {
        "post": {
            "tags": [
                "Service"
            ],
                "parameters": [
                    {
                        "name": "serviceName",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                                "additionalProperties": {
                                "type": "string"
                            }
                        }
                    },
                    "text/json": {
                        "schema": {
                            "type": "object",
                                "additionalProperties": {
                                "type": "string"
                            }
                        }
                    },
                    "application/*+json": {
                        "schema": {
                            "type": "object",
                                "additionalProperties": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        },
        "get": {
            "tags": [
                "Service"
            ],
                "parameters": [
                    {
                        "name": "serviceName",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "pageNumber",
                        "in": "query",
                        "schema": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        },
        "put": {
            "tags": [
                "Service"
            ],
                "parameters": [
                    {
                        "name": "serviceName",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "dataId",
                        "in": "query",
                        "schema": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                                "additionalProperties": {
                                "type": "string"
                            }
                        }
                    },
                    "text/json": {
                        "schema": {
                            "type": "object",
                                "additionalProperties": {
                                "type": "string"
                            }
                        }
                    },
                    "application/*+json": {
                        "schema": {
                            "type": "object",
                                "additionalProperties": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        },
        "delete": {
            "tags": [
                "Service"
            ],
                "parameters": [
                    {
                        "name": "serviceName",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "dataId",
                        "in": "query",
                        "schema": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        }
    },
    "/api/v{version}/Service/size": {
        "get": {
            "tags": [
                "Service"
            ],
                "parameters": [
                    {
                        "name": "serviceName",
                        "in": "query",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "version",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                    "responses": {
                "200": {
                    "description": "Success"
                },
                "401": {
                    "description": "Unauthorized"
                },
                "403": {
                    "description": "Forbidden"
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        }
    }
},
"components": {
    "securitySchemes": {
        "bearerAuth": {
            "type": "http",
                "description": "JWT Authorization header using the Bearer scheme.",
                    "scheme": "bearer",
                        "bearerFormat": "JWT"
        }
    }
}
}



Основной URL: .../api/v1



Получение токена доступа:
Необходимая роль: нет

Endpoint: auth / token

Http - метод: Post

Ожидается на вход: string username, string password

Ожидается на выход:

{

    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoib3V0X25vdmlrb",

        "userName": "out_novikovkd"

}



Создание учетной записи:
Необходимая роль: Admin, Supervisor

Endpoint: auth / user

Http - метод: Post

Ожидается на вход: string username, string password

Ожидается на выход: 200ОК



Получение пользовательских ролей пользователя:
Необходимая роль: Admin, Supervisor

Endpoint: roles / user

Http - метод: Get

Ожидается на вход: string username

Ожидается на выход:

Townhall, Operbot

Получение собственных пользовательских ролей:
Необходимая роль: User, Admin, Supervisor

Endpoint: roles / self

Http - метод: Get

Ожидается на вход: нет

Ожидается на выход:

[
    "Townhall"
]

Получение всех доступных пользовательских ролей:
Необходимая роль: Admin, Supervisor

Endpoint: roles / availiableroles

Http - метод: Get

Ожидается на вход: нет

Ожидается на выход:

Operbot, Uda, Wifi, Townhall
Добавление пользовательских ролей:
Необходимая роль: Admin, Supervisor

Endpoint: roles / user

Http - метод: Put

Ожидается на вход: string login, string role

Ожидается на выход: 200OK



Добавление роли администратора:
Необходимая роль: Supervisor

Endpoint: roles / admin

Http - метод: Put

Ожидается на вход: string login

Ожидается на выход: 200OK



Получение необходимых полей:
Необходимая роль: User, Admin, Supervisor

Endpoint: service / fields

Http - метод: Get

Ожидается на вход: string serviceName

Ожидается на выход:

{
    "serviceName": "Wifi",
        "fields": {
        "Description": "Описание сети",
            "SSID": "Название сети",
                "Password": "Пароль сети"
    }
}

Добавление записей в базу знаний:
Необходимая роль: User, Admin, Supervisor

Endpoint: service / data

Http - метод: Post

Ожидается на вход: Dictionary < string, string > data, string serviceName

Ожидается на выход: 200OK



Получение записей из базы знаний:
Необходимая роль: User, Admin, Supervisor

Endpoint: service / data

Http - метод: Get

Ожидается на вход: string serviceName, int pageNumber

Ожидается на выход:

[{ "Id": 0, "Link": "testlink1", "UserLogin": "out_pronkin", "ExpirationDate": "2023-05-05T15:53:39.458", "Details": "test" }, { "Id": 1, "Link": "testilnk2", "UserLogin": "kuramshinia", "ExpirationDate": "2023-05-05T15:53:39.458", "Details": "test" }]

Получение количества записей в базе знаний:
Необходимая роль: User, Admin, Supervisor

Endpoint: service / size

Http - метод: Get

Ожидается на вход: string serviceName

Ожидается на выход: 8



Редактирование записей в базе знаний:
Необходимая роль: User, Admin, Supervisor

Endpoint: service / data

Http - метод: Put

Ожидается на вход: Dictionary < string, string > data, string serviceName, int dataId

Ожидается на выход: 200OK



Удаление записей в базе знаний:
Необходимая роль: User, Admin, Supervisor

Endpoint: service / data

Http - метод: Delete

Ожидается на вход: string serviceName, int dataId

Ожидается на выход: 200OK