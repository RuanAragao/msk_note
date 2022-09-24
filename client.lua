local active = false

function toggleNote ()
    active = not active
    if active == false then
        SetNuiFocus(false)
        SendNUIMessage({
            hidden = true
        })
        return
    end
    SetNuiFocus(true, true)
    SendNUIMessage({
        hidden = false
    })
end

RegisterCommand('note', function(source, args)
    toggleNote()
end, false)

RegisterNUICallback("save", function(data, callback)
    TriggerServerEvent("msk_note:save", data, callback)
    SendNUIMessage({
        done = true
    })
end)

RegisterNUICallback('close', function(data)
    toggleNote()
end)

RegisterNetEvent('msk_note:saved')
AddEventHandler('msk_note:saved', function(data)
    SendNUIMessage({
        done = true
    })
end)

-- RegisterCommand('abc', function(source, args, rawCommand)
-- 	print(rawCommand:sub(4))
-- end, false)
