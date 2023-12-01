var APP_DATA = {
  "scenes": [
    {
      "id": "0-vorraum",
      "name": "Vorraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7536056887447646,
        "pitch": 0.03290401132012377,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -0.18018168972943727,
          "pitch": 0.016764282828955146,
          "rotation": 0,
          "target": "1-bad"
        },
        {
          "yaw": 1.253676346075725,
          "pitch": 0.02231592934533566,
          "rotation": 0,
          "target": "2-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bad",
      "name": "Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.41097891071609816,
        "pitch": 0.026026466885365807,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -2.8636288735252204,
          "pitch": 0.015039918525152629,
          "rotation": 0,
          "target": "0-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kochbereich",
      "name": "Kochbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.5559666999080086,
        "pitch": 0.012918708186862915,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 0.10376775734583177,
          "pitch": 0.0193780622802997,
          "rotation": 0,
          "target": "3-wohnbereich"
        },
        {
          "yaw": 1.5333183847356846,
          "pitch": 0.00257810939836034,
          "rotation": 0,
          "target": "5-dachterrasse-1"
        },
        {
          "yaw": 0.4368480006318709,
          "pitch": 0.017517483377076815,
          "rotation": 0,
          "target": "4-zimmer"
        },
        {
          "yaw": -1.5983060258129669,
          "pitch": 0.04628747356463592,
          "rotation": 0,
          "target": "0-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wohnbereich",
      "name": "Wohnbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.18183158370660024,
        "pitch": -0.10464153631358464,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 2.214566681708437,
          "pitch": -0.012417274502858788,
          "rotation": 0,
          "target": "4-zimmer"
        },
        {
          "yaw": 2.802303433474963,
          "pitch": -0.0032021848820491527,
          "rotation": 0,
          "target": "2-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-zimmer",
      "name": "Zimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.018361777277036,
        "pitch": -0.014784743813851975,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.4623624416384686,
          "pitch": 0.004823628323901374,
          "rotation": 0,
          "target": "3-wohnbereich"
        },
        {
          "yaw": -2.42258251707546,
          "pitch": 0.00009542310986532243,
          "rotation": 0,
          "target": "2-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dachterrasse-1",
      "name": "Dachterrasse 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.7832709558630455,
        "pitch": 0.8810557167180555,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -1.1354309272546885,
          "pitch": 0.12989605095392776,
          "rotation": 0,
          "target": "6-dachterrasse-2"
        },
        {
          "yaw": -1.9590794343936864,
          "pitch": 0.8943879529378176,
          "rotation": 0,
          "target": "2-kochbereich"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dachterrasse-2",
      "name": "Dachterrasse 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.123204366893141,
        "pitch": -0.01709064461090648,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": 1.938280810838843,
          "pitch": 0.06427006929502355,
          "rotation": 0,
          "target": "5-dachterrasse-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
