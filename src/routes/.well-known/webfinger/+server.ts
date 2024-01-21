import { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = ({url}) => {
    const resource = url.searchParams.get("resource")

    const webfinger = {
        "subject": "acct:me@treelar.xyz",
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
          },
          {
            "rel": "http://openid.net/specs/connect/1.0/issuer",
            "href": "https://git.treelar.xyz/"
          }
        ],
      }
    return new Response(
        JSON.stringify(webfinger), {
            headers: {
                "Content-Type": "application/jrd+json"
            }
        }
    )
}