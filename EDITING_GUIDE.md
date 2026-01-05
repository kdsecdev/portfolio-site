# How to Edit Content

This portfolio is built with **Next.js** and **React**. Content is currently stored directly within the component files for simplicity and performance.

## Editing Specific Sections

### 1. Achievements
- **File**: `src/components/Achievements.tsx`
- **How to Edit**: 
    - Open the file.
    - Locate the `achievements` array at the top of the component.
    - Add a new object to the list or modify existing ones.
    - **Format**:
      ```javascript
      {
        title: "New Achievement Title",
        role: "Your Role (e.g. Winner)",
        desc: "Short description of what you did.",
        icon: <Trophy size={32} />, // Import icons from 'lucide-react'
      }
      ```

### 2. Work / Projects
- **File**: `src/components/Work.tsx`
- **How it works**: Currently fetches from your GitHub (`kdsecdev`).
- **To add manual projects**:
    - You can create a static array similar to `Achievements.tsx` if you want to show projects not on GitHub.
    - Or just pin repositories on your GitHub profile.

### 3. About Me
- **File**: `src/components/AboutMe.tsx` or `AboutMeClient.tsx`
- **How to Edit**: Update the text within the paragraph tags `<p>... </p>`.

### 4. Global Styles (Colors/Fonts)
- **File**: `src/app/globals.css`
- **How to Edit**: Change the CSS variables in the `:root` section (e.g., `--neon-blue`).

## Keeping it "Fresh"
- **Update regularly**: Every time you finish a project or get a cert, add it immediately.
- **Blog (Optional)**: If you want to write articles, we could add a Markdown blog later.
- **GitHub**: Keep your pinned repos updated, as the site pulls from there automatically (or we can configure it to).
