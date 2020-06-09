/// reference types="cypress" />

describe('Atendentes em lote', () => {
    it('teste de carga de atendentes', () => {
        cy.request({
            method: 'POST',
            url: 'https://hmg-http.msging.net/commands',
            headers : {
                'Content-Type': 'application/json',
                Authorization: 'Key dGVzdGVib3Q1OmVjM0ZlWEc2eUNFNElEVElyY0VL',
            },
            body: {
                "method":"set",
                "to":"postmaster@desk.msging.net",
                "type":"application/vnd.lime.collection+json",
                "uri":"/attendants",
                "resource":
                {
                    "total": 100,
                    "itemType": "application/vnd.iris.desk.attendant+json",
                    "items": 
                    [
                        {
                            "identity": "haguai1%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai2%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai3%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai4%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai5%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai6%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai7%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai8%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai9%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai10%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai11%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai12%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai13%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai14%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai15%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai16%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai17%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai18%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai19%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai20%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai21%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai22%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai23%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai24%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai25%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai26%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai27%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai28%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai29%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai30%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai31%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai32%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai33%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai34%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai35%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai36%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai37%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai38%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai39%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai40%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai41%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai42%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },
                        {
                            "identity": "haguai43%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai44%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai45%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai46%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai47%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai48%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai49%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        },{
                            "identity": "haguai50%40take.net@blip.ai",
                            "teams": 
                            [
                                "Default"
                            ]
                        }
                    ]
                },
                "id":"e6dcee74-383c-41ba-92e2-001f4206c85f"
            }
        }).as('emails')
        cy.get('@emails').its('status').should('be.equal', 200)  
    })
    // it('Send mensage', () => {

    //     cy.request({
    //         method: 'POST',
    //         url: 'https://hmg-http.msging.net/messages',
    //         
    //         body : {
    //             to: "d62bacf3-6987-4b40-bf9b-3b250be39f55.testebot5@0mn.io/default",
    //             type: "text/plain",
    //             content: "Gotham is in danger!"
    //         },
    //     }).as('mensage')
    //     cy.get('@mensage').its('status').should('be.equal', 202)    
    // })
})