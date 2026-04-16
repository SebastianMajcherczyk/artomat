import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Grid,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Druk ścienny w sypialni – czy to dobry pomysł?",
    slug: "druk-scienny-w-sypialni",
    excerpt:
      "Zastanawiasz się, czy warto zastosować druk ścienny w sypialni? Przedstawiamy inspiracje i praktyczne wskazówki...",
    date: "2025-08-17",
    tags: ["Inspiracje", "Sypialnia"],
  },
  {
    title: "Jak przygotować ścianę pod druk UV?",
    slug: "jak-przygotowac-sciane-pod-druk-uv",
    excerpt:
      "Aby druk UV trzymał się długo i wyglądał estetycznie, należy zadbać o odpowiednie przygotowanie powierzchni. Zobacz jak to zrobić...",
    date: "2025-08-10",
    tags: ["Technika", "Druk UV"],
  },
];

export const BlogList = () => {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {blogPosts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.slug}>
          <Card
            variant="outlined"
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component={Link}
                to={`/blog/${post.slug}`}
                sx={{ textDecoration: "none", color: "primary.main" }}
              >
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {post.excerpt}
              </Typography>
              <div
                style={{
                  marginTop: 8,
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                {post.tags.map((tag) => (
                  <Chip label={tag} key={tag} size="small" />
                ))}
              </div>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
              <Typography variant="caption" color="text.secondary">
                {post.date}
              </Typography>
              <Button size="small" component={Link} to={`/blog/${post.slug}`}>
                Czytaj więcej
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
