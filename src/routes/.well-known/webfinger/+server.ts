export function GET() {
    const webfinger = {
        "subject": "acct:treelar@mastodon.social",
        "aliases": [
          "https://mastodon.social/@treelar",
          "https://mastodon.social/users/treelar"
        ],
        "links": [
          {
            "rel": "http://webfinger.net/rel/profile-page",
            "type": "text/html",
            "href": "https://mastodon.social/@treelar"
          },
          {
            "rel": "self",
            "type": "application/activity+json",
            "href": "https://mastodon.social/users/treelar"
          },
          {
            "rel": "http://ostatus.org/schema/1.0/subscribe",
            "template": "https://mastodon.social/authorize_interaction?uri={uri}"
          }
        ]
      }
    return new Response(
        JSON.stringify(webfinger), {
            headers: {
                "Content-Type": "application/jrd+json"
            }
        }
    )
}