const User = require('./User');
const Group = require('./Group');

User.hasMany(Group, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
  });
User.hasMany(Comment,{
    foreignKey: 'comment_id'
})

  
  Group.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Group.hasMany(Comment,{
    foreignKey:"comment_id"
  })
  Comment.belongsToMany(Group,{
    foreignKey: 'group_id'
  })
  Comment.belongsTo(User,{
      foreignKey: 'user_id'
  })

module.exports = { User, Group };