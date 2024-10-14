// ServerEvents.tags("item", (event) => {
//   event.tags.put();
// });

ServerEvents.recipes((event) => {
    event.shaped("phonos:electronic_note_block", ["E", "N", "P"], {
        E: "create:electron_tube",
        N: "minecraft:note_block",
        P: "create:precision_mechanism",
    });

    event.shaped("phonos:electronic_jukebox", ["E", "J", "P"], {
        E: "create:electron_tube",
        J: "minecraft:jukebox",
        P: "create:precision_mechanism",
    });

    event.shapeless("phonos:loudspeaker", [
        "minecraft:note_block",
        "createaddition:connector",
    ]);

    event.shaped("phonos:audio_cable", ["SN"], {
        S: "#createaddition:spools",
        N: "create:copper_nugget",
    });
    
    event.shaped(
        'phonos:connection_hub',
        [
            ' C ',
            'CBC',
            ' C '
        ],
        {
            B: 'create:brass_casing',
            C: 'create:copper_nugget',
        }
    );
    
    event.shaped(
        'phonos:radio_transceiver',
        [
            ' I ',
            ' T ',
            'EBE'
        ],
        {
            I: 'minecraft:iron_bars',
            T: 'minecraft:redstone_torch',
            E: 'create:electron_tube',
            B: 'create:brass_casing'
        }
    );
    
    event.shaped(
    	'phonos:radio_loudspeaker',
        [
            ' I ',
            ' T ',
            ' N '
        ],
        {
            I: 'minecraft:iron_bars',
            T: 'minecraft:redstone_torch',
            N: 'minecraft:note_block'
        }
    );
    event.shaped(
    	'phonos:audio_switch',
        [
            ' R ',
            'SBS',
            ' R '
        ],
        {
           R: 'minecraft:redstone_dust',
           S: '#createaddition:spools',
           B: 'create:brass_casing'
        }
    );
    event.shaped(
    	'phonos:satellite_receiver',
        [
            'I I',
            ' I ',
            'EBE'
        ],
        {
            I: 'create:iron_sheet',
            E: 'create:electron_tube',
            B: 'create:brass_casing'
        }
    );
    event.shaped(
    	'phonos:microphone_base',
        [
            ' E ',
            ' R ',
            ' B '
        ],
        {
            E: 'minecraft:echo_shard',
            R: 'createaddition:iron_rod',
            B: 'create:brass_casing'
        }
    );
    event.shaped(
    	'phonos:wireless_microphone_base',
        [
            ' R ',
            ' E ',
            ' B '
        ],
        {
            E: 'minecraft:echo_shard',
            R: 'minecraft:redstone_torch',
            B: 'create:brass_casing'
        }
    );
    event.shaped(
    	'phonos:portable_radio',
        [
            ' I ',
            'EAE',
            ' P '
        ],
        {
            I: 'minecraft:iron_bars',
            A: 'create:andesite_alloy',
            E: 'create:electron_tube',
            P: 'create:precision_mechanism'
        }
    );
    event.shaped(
    	'phonos:portable_satellite_radio',
        [
            ' E ',
            'TAT',
            ' P '
        ],
        {
            E: 'createaddition:electrum_rod',
            T: 'create:electron_tube',
            A: 'create:andesite_alloy',
            P: 'create:precision_mechanism'
        }
    );
    event.shaped(
    	'phonos:portable_record_player',
        [
            ' R ',
            'ADA',
            'EPE'
        ],
        {
            R: 'minecraft:redstone_torch',
            D: 'minecraft:diamond',
            A: 'create:andesite_alloy',
            E: 'create:electron_tube',
            P: 'create:precision_mechanism'
        }
    );
    event.shaped(
    	'phonos:headset',
        [
            ' A ',
            'I I',
            'N N'
        ],
        {
            N: 'minecraft:note_block',
            A: 'create:andesite_alloy',
            I: 'createaddition:iron_rod'
        }
    );
    
    

    for (let index in Color.DYE) {
        /** @type {Internal.DyeColor} */
        let color = Color.DYE[index];
        event.shaped(`phonos:${color.serializedName}_audio_cable`, ["DSN"], {
            D: `minecraft:${color.serializedName}_dye`,
            S: "#createaddition:spools",
            N: "create:copper_nugget",
        });
    }
});
