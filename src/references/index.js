
moveBackward(arr, elem) {
  moveElem(arr, elem, -1)
}

function moveForward(arr, elem) {
  moveElem(arr, elem, 1)
}

function moveElem(arr, elem, direction) {
  if (direction !== 1 || direction !== -1) {
    throw new Error('Invalid direction, expected 1 or -1, but got: ' + direction)
  }
	const idx = arr.findIndex(x => x === elem) // 3
  const notFound = (idx === -1)
  const isAlone = (arr.length === 1)

  let onEdge
  if (direction === 1) {
    onEdge = (idx === arr.length - 1)
  } esle {
    onEdge = (idx === 0)
  }

  if (notFound || onEdge || isAlone) return arr

  const idx2 = idx + direction
  const swapper = arr[idx2]
  arr[idx2] = arr[idx]
  arr[idx] = swapper
  return arr
}




/*****************************************************
Example

// 20170319174617
// https://api.crossref.org/works/10.1002/pssc.201200953

{
  "status": "ok",
  "message-type": "work",
  "message-version": "1.0.0",
  "message": {
    "indexed": {
      "date-parts": [ [2016, 11, 8] ],
      "date-time": "2016-11-08T06:41:49Z",
      "timestamp": 1478587309230
    },
    "reference-count": 0,
    "publisher": "Wiley-Blackwell",
    "issue": "3",
    "license": [
      {
        "URL": "http://doi.wiley.com/10.1002/tdm_license_1",
        "start": {
          "date-parts": [
            [
              2015,
              9,
              1
            ]
          ],
          "date-time": "2015-09-01T00:00:00Z",
          "timestamp": 1441065600000
        },
        "delay-in-days": 936,
        "content-version": "tdm"
      }
    ],
    "content-domain": {
      "domain": [

      ],
      "crossmark-restriction": false
    },
    "short-container-title": [
      "Phys. Status Solidi C"
    ],
    "cited-count": 0,
    "published-print": {
      "date-parts": [
        [
          2013,
          3
        ]
      ]
    },
    "DOI": "10.1002/pssc.201200953",
    "type": "journal-article",
    "created": {
      "date-parts": [
        [
          2013,
          2,
          7
        ]
      ],
      "date-time": "2013-02-07T11:55:44Z",
      "timestamp": 1360238144000
    },
    "page": "319-322",
    "source": "CrossRef",
    "title": [
      " The quantum-confined Stark effect and localization of charge carriers in Al x Ga 1-x N/Al y Ga 1-y N quantum wells with different morphologies "
    ],
    "prefix": "http://id.crossref.org/prefix/10.1002",
    "volume": "10",
    "author": [
      {
        "given": "E. A.",
        "family": "Shevchenko",
        "affiliation": []
      },
      {
        "given": "V. N.",
        "family": "Jmerik",
        "affiliation": []
      },
      {
        "given": "A. M.",
        "family": "Mizerov",
        "affiliation": []
      },
      {
        "given": "D. V.",
        "family": "Nechaev",
        "affiliation": []
      },
      {
        "given": "A. A.",
        "family": "Sitnikova",
        "affiliation": []
      },
      {
        "given": "S. V.",
        "family": "Ivanov",
        "affiliation": []
      },
      {
        "given": "A. A.",
        "family": "Toropov",
        "affiliation": []
      }
    ],
    "member": "http://id.crossref.org/member/311",
    "published-online": {
      "date-parts": [
        [
          2013,
          2,
          7
        ]
      ]
    },
    "container-title": [
      "physica status solidi (c)"
    ],
    "original-title": [],
    "link": [
      {
        "URL": "https://api.wiley.com/onlinelibrary/tdm/v1/articles/10.1002%2Fpssc.201200953",
        "content-type": "unspecified",
        "content-version": "vor",
        "intended-application": "text-mining"
      }
    ],
    "deposited": {
      "date-parts": [
        [
          2016,
          10,
          1
        ]
      ],
      "date-time": "2016-10-01T06:31:47Z",
      "timestamp": 1475303507000
    },
    "score": 1.0,
    "subtitle": [],
    "short-title": [],
    "issued": {
      "date-parts": [
        [ 2013, 2, 7 ]
      ]
    },
    "URL": "http://dx.doi.org/10.1002/pssc.201200953",
    "ISSN": [
      "1862-6351"
    ],
    "citing-count": 0,
    "subject": [
      "Condensed Matter Physics"
    ]
  }
}
*/

