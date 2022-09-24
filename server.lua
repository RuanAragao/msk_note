RegisterServerEvent('msk_note:save')
AddEventHandler('msk_note:save', function(data)
    local title = data.title
    local text = data.text

    if text ~= nil and text ~="" then
        print(title)
        print(text)

        MySQL.insert('INSERT INTO `msk_notes` (title, text) VALUES (?, ?)', {title, text}, function(id)
            TriggerClientEvent('msk_note:save', id)
        end)

        return
    end
end)

RegisterCommand('qq', function(source, args)
    print('<<< QQ >>>')
    local result = MySQL.query.await('SELECT * FROM `msk_notes`')
    if result then
        for i = 1, #result do
            local row = result[i]
            print(row.id, row.title, row.text)
        end
    end
end, false)