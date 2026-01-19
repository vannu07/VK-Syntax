import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillRadarChartProps {
  skills: Skill[];
  size?: number;
}

export default function SkillRadarChart({ skills, size = 300 }: SkillRadarChartProps) {
  const center = size / 2;
  const maxRadius = size * 0.4;
  const angleStep = (2 * Math.PI) / skills.length;

  // Generate grid lines
  const gridLevels = [20, 40, 60, 80, 100];
  
  // Calculate points for the skill polygon
  const getPoint = (index: number, level: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const radius = (level / 100) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const skillPoints = skills.map((skill, i) => getPoint(i, skill.level));
  const polygonPath = skillPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="overflow-visible">
        {/* Grid circles */}
        {gridLevels.map((level) => (
          <circle
            key={level}
            cx={center}
            cy={center}
            r={(level / 100) * maxRadius}
            fill="none"
            stroke="hsl(190 100% 50% / 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {skills.map((_, i) => {
          const point = getPoint(i, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={point.x}
              y2={point.y}
              stroke="hsl(190 100% 50% / 0.2)"
              strokeWidth="1"
            />
          );
        })}

        {/* Skill polygon */}
        <motion.path
          d={polygonPath}
          fill="hsl(190 100% 50% / 0.2)"
          stroke="hsl(190 100% 50%)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            filter: 'drop-shadow(0 0 10px hsl(190 100% 50% / 0.5))',
          }}
        />

        {/* Skill points */}
        {skillPoints.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="hsl(190 100% 50%)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
            style={{
              filter: 'drop-shadow(0 0 8px hsl(190 100% 50%))',
            }}
          />
        ))}
      </svg>

      {/* Labels */}
      {skills.map((skill, i) => {
        const angle = angleStep * i - Math.PI / 2;
        const labelRadius = maxRadius + 30;
        const x = center + labelRadius * Math.cos(angle);
        const y = center + labelRadius * Math.sin(angle);

        return (
          <motion.div
            key={skill.name}
            className="absolute text-xs font-mono text-muted-foreground whitespace-nowrap"
            style={{
              left: x,
              top: y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <span className="text-primary font-bold">{skill.level}%</span>
            <br />
            {skill.name}
          </motion.div>
        );
      })}
    </div>
  );
}
